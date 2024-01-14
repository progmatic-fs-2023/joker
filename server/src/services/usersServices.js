import { PrismaClient } from '@prisma/client';

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
      },
    });
    console.log('new user:', result);
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

export default {
  getAllUsers,
  getUserByID,
  getUserByEmail,
  updateUserRefreshToken,
  deleteUserRefreshToken,
  findUserByRefreshToken,
  createNewUser,
};
