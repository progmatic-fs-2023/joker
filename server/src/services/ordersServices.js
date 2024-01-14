import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getOrderById = async orderId => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        quantity: {
          include: {
            targetHerb: true,
          },
        },
      },
    });
    return order;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma getOrderById finished');
  }
  return null;
};

// for testing the endpoint only
const getAllOrders = async () => {
  try {
    const order = await prisma.order.findMany({
      include: { quantity: true },
    });
    return order;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma getAllOrders finished');
  }
  return null;
};

const getAllOrdersOfUser = async userID => {
  // TODO remove this below
  try {
    const order = await prisma.order.findMany({
      // where: { id: userId },
      where: { userID },
      include: {
        quantity: {
          include: {
            targetHerb: true,
          },
        },
      },
    });
    return order;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma getAllOrdersOfUser finished');
  }
  return null;
};

const createOrder = async (userId, herbID, quantity) => {
  try {
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
      // update: { quantity: },
      update: { quantity: { increment: quantity } },
      create: { herbID, orderID: order.id, quantity },
    });

    return prisma.order.findUnique({
      where: { id: order.id },
      include: { quantity: true },
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma createOrder finished');
  }
  return null;
};

const updateCartItem = async (orderID, herbID, newQuantity) => {
  try {
    const order = await prisma.herbOnOrder.update({
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
    return order;
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma updateCartItem finished');
  }
  return null;
};

const finalizeOrder = async orderID => {
  console.log('orderID ', orderID);
  try {
    const order = await prisma.order.findUnique({
      where: { id: orderID },
      include: { quantity: { include: { targetHerb: true } } },
    });
    console.log('finalizeOrder', order);
    console.log('finalizeOrder', order.quantity[0].targetHerb.stockQuantity);
    const updatePromises = order.quantity.map(item => {
      if (item.targetHerb.stockQuantity < item.quantity) {
        console.log('itemQty:', item.quantity);
        console.log('stockQty:', item.targetHerb.stockQuantity);
        return null;
        // throw new Error('Nincs elegendő készlet.');
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
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma finalizeOrder finished');
  }
  return null;
};

const deleteOrderById = async orderID => {
  try {
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
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Prisma deleteOrderById finished');
  }
  return null;
};

export default {
  getOrderById,
  getAllOrders,
  createOrder,
  updateCartItem,
  finalizeOrder,
  deleteOrderById,
  getAllOrdersOfUser,
};
