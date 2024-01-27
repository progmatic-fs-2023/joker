import { PrismaClient } from '@prisma/client';
import crypto from 'node:crypto';
import verifyEmail from '../mail/verifyEmail';

const prisma = new PrismaClient();

const getAllUsers = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  return null;
};

const getUserByID = async id => {
  try {
    const result = await prisma.user.findFirst({
      where: { id },
    });
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  return null;
};

const getUserByEmail = async email => {
  try {
    const result = await prisma.user.findFirst({
      where: { email },
    });
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  return null;
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
    verifyEmail(result.email, result.verifyString);
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  return null;
};

const findUserByVerifyString = async verifyString => {
  try {
    const result = await prisma.user.findFirst({
      where: { verifyString },
    });
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  return null;
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
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  return null;
};

const findUserByRefreshToken = async refreshToken => {
  try {
    const result = await prisma.user.findFirst({
      where: { refreshToken },
    });
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  return null;
};

const updateUserRefreshToken = async (id, refreshToken) => {
  try {
    const result = await prisma.user.update({
      where: { id },
      data: { refreshToken },
    });
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  return null;
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
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  return null;
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
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  return null;
};

const deleteUserByID = async id => {
  try {
    const result = await prisma.user.delete({
      where: { id },
    });
    console.log('user deleted:', result);
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  return null;
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
