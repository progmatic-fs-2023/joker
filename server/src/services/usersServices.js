import { PrismaClient } from '@prisma/client';
import crypto from 'node:crypto';
// import verifyEmail from '../mail/verifyEmail';

const prisma = new PrismaClient();

const getAllUsers = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const getUserByID = async id => {
  try {
    const result = await prisma.user.findFirst({
      where: { id },
    });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const getUserByEmail = async email => {
  try {
    const result = await prisma.user.findFirst({
      where: { email },
    });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const createNewUser = async (user, hashedPwd) => {
  try {
    const result = await prisma.user.create({
      data: {
        email: user,
        password: hashedPwd,
        verifyString: crypto.randomBytes(16).toString('hex'),
      },
    });
    // TODO handle verifyconnection
    // verifyConnection();
    // if (result) {
    //   verifyEmail(result.email, result.verifyString);
    // }
    // verifyEmail(result.email, result.verifyString);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const findUserByVerifyString = async verifyString => {
  try {
    const result = await prisma.user.findFirst({
      where: { verifyString },
    });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const updateUserByVerifyString = async userId => {
  try {
    const result = await prisma.user.update({
      where: { id: userId },
      data: { verified: true, verifyString: '' },
    });
    console.log('verified user:', result);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const findUserByRefreshToken = async refreshToken => {
  try {
    const result = await prisma.user.findFirst({
      where: { refreshToken },
    });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const updateUserRefreshToken = async (id, refreshToken) => {
  try {
    const result = await prisma.user.update({
      where: { id },
      data: { refreshToken },
    });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const updateUserData = async (id, updateObject) => {
  try {
    const result = await prisma.user.update({
      where: { id },
      data: { ...updateObject },
    });
    console.log('update result:', result);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteUserRefreshToken = async id => {
  try {
    const result = await prisma.user.update({
      where: { id },
      data: { refreshToken: '' },
    });
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteUserByID = async id => {
  try {
    const ordersFound = await prisma.order.findMany({
      where: { userID: id },
      include: { quantity: true },
    });
    const updatePromises = ordersFound.map(item =>
      prisma.herbOnOrder.deleteMany({
        where: { orderID: item.id },
      }),
    );
    await Promise.all(updatePromises);
    await prisma.order.deleteMany({
      where: { userID: id },
    });
    const result = await prisma.user.delete({
      where: { id },
    });
    console.log('deleted user:', result);
    return result;
  } catch (err) {
    console.error('deleteUserByID:', err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
};

export default {
  getAllUsers,
  getUserByID,
  getUserByEmail,
  updateUserRefreshToken,
  deleteUserRefreshToken,
  findUserByRefreshToken,
  findUserByVerifyString,
  updateUserByVerifyString,
  createNewUser,
  updateUserData,
  deleteUserByID,
};
