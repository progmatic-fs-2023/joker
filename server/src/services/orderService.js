import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getOrderById = orderId =>
  prisma.order.findUnique({
    where: { id: orderId },
    include: {
      quantity: {
        include: {
          targetHerb: true,
        },
      },
    },
  });

export const getAllOrders = () =>
  prisma.order.findMany({
    include: { quantity: true },
  });

export const createOrder = async (userId, herbID, quantity) => {
  const order =
    (await prisma.order.findFirst({
      where: { userID: userId, status: 'CART' },
    })) ||
    (await prisma.order.create({
      data: {
        userID: userId,
        status: 'CART',
        customerNote: '',
      },
    }));

  await prisma.herbOnOrder.upsert({
    where: {
      herbID_orderID: {
        herbID,
        orderID: order.id,
      },
    },
    update: { quantity },
    create: { herbID, orderID: order.id, quantity },
  });

  return prisma.order.findUnique({
    where: { id: order.id },
    include: { quantity: true },
  });
};

export const updateCartItem = (orderID, herbID, newQuantity) =>
  prisma.herbOnOrder.update({
    where: {
      herbID_orderID: {
        herbID,
        orderID,
      },
    },
    data: {
      quantity: newQuantity,
    },
  });

export const finalizeOrder = async orderID => {
  const order = await prisma.order.findUnique({
    where: { id: orderID },
    include: { quantity: { include: { targetHerb: true } } },
  });

  const updatePromises = order.quantity.map(item => {
    if (item.targetHerb.stockQuantity < item.quantity) {
      throw new Error('Nincs elegendő készlet.');
    }
    return prisma.herb.update({
      where: { id: item.targetHerb.id },
      data: { stockQuantity: { decrement: item.quantity } },
    });
  });

  await Promise.all(updatePromises);

  const updatedOrder = await prisma.order.update({
    where: { id: orderID },
    data: { status: 'VERIFIED' },
  });

  return updatedOrder;
};

export const deleteOrderById = async orderID => {
  const items = await prisma.herbOnOrder.findMany({
    where: { orderID },
  });

  const updatePromises = items.map(item =>
    prisma.herb.update({
      where: { id: item.herbID },
      data: { stockQuantity: { increment: item.quantity } },
    }),
  );

  await Promise.all(updatePromises);

  await prisma.herbOnOrder.deleteMany({
    where: { orderID },
  });

  const deletedOrder = await prisma.order.delete({
    where: { id: orderID },
  });

  return deletedOrder;
};
