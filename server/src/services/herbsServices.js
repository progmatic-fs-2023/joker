import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllHerbs = async () => {
    const result = await prisma.herb.findMany();
    return result;
};

export const getHerbByID = async (id) => {
    const result = await prisma.herb.find(
        {
            where: {
                id: id
            }
        }
    );
    return result;
};