import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllHerbs = async () => {
  try {
    const result = await prisma.herb.findMany();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma disconnected');
  }
  return null;
};

const getHerbByID = async id => {
  try {
    const result = await prisma.herb.findFirst({
      where: {
        id,
      },
    });
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma disconnected');
  }
  return null;
};

export default { getAllHerbs, getHerbByID };
