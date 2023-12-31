import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllUsers = async () => {
    const result = await prisma.user.findMany();
    return result;
};

export const getUserByID = async (id) => {
    const result = await prisma.user.find(
        {
            where: {
                id: id
            }
        }
    );
    return result;
};