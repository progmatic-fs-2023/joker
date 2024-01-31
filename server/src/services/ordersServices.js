import { PrismaClient } from '@prisma/client';
// import orderInfoEmail from '../mail/orderInfoEmail';

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
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma getOrderById finished');
  }
};

// for testing the endpoint only
const getAllOrders = async () => {
  try {
    const order = await prisma.order.findMany({
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
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma getAllOrders finished');
  }
};

const getAllOrdersOfUser = async userID => {
  // TODO remove this below
  try {
    const order = await prisma.order.findMany({
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
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma getAllOrdersOfUser finished');
  }
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
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma createOrder finished');
  }
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
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma updateCartItem finished');
  }
};

const finalizeOrder = async orderID => {
  console.log('orderID ', orderID);
  try {
    const order = await prisma.order.findUnique({
      where: { id: orderID },
      include: {
        quantity: { include: { targetHerb: true } },
        targetUser: {
          select: {
            email: true,
          },
        },
      },
    });
    console.log('finalizedOrder mail', order.targetUser.email);
    // console.log('finalizeOrder', order.quantity[0].targetHerb.stockQuantity);
    const updatePromises = order.quantity.map(item => {
      if (item.targetHerb.stockQuantity < item.quantity) {
        // console.log('itemQty:', item.quantity);
        // console.log('stockQty:', item.targetHerb.stockQuantity);
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
    // TODO send mail
    const orderedHerbs = order.quantity.map(item => ({
      herbName: item.targetHerb.herbName,
      quantity: item.quantity,
      price: item.targetHerb.price,
    }));
    orderedHerbs.orderId = orderID;
    orderedHerbs.customer = order.targetUser.email;
    console.log('ordered herbs:', orderedHerbs);
    // orderInfoEmail(order.targetUser.email, orderedHerbs)
    // orderInfoEmail('rederax@gmail.com', orderedHerbs) // test email
    // updatedOrder.email = order.targetUser.email
    return updatedOrder;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma finalizeOrder finished');
  }
};

const updateClosedOrder = async (orderID, herbs) => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: orderID },
      include: { quantity: { include: { targetHerb: true } } },
    });

    const updatePromises = order.quantity.map(async item => {
      const herbToUpdate = herbs.find(herb => herb.herbID === item.herbID);
      if (!herbToUpdate) return null;

      const { newQty } = herbToUpdate;
      const stockQty = item.targetHerb.stockQuantity;
      const originalQty = item.quantity;

      if (newQty > originalQty && newQty - originalQty > stockQty) {
        throw new Error(`Insufficient stock for the herb: ${item.targetHerb.herbName}`);
      }

      // Update herbOnOrder quantity
      await prisma.herbOnOrder.update({
        where: {
          herbID_orderID: {
            herbID: herbToUpdate.herbID,
            orderID,
          },
        },
        data: { quantity: newQty },
      });

      // Update stock quantity
      const stockUpdateValue = originalQty - newQty;
      return prisma.herb.update({
        where: { id: herbToUpdate.herbID },
        data: { stockQuantity: { increment: stockUpdateValue } },
      });
    });

    await Promise.all(updatePromises);
    return await prisma.order.findFirst({ where: { id: orderID } });
  } catch (err) {
    console.error(err);
    // Instead of process.exit, consider returning an error response
    return { error: err.message };
  } finally {
    await prisma.$disconnect();
    console.log('Prisma updateClosedOrder finished');
  }
};

const deleteOrderById = async orderID => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: orderID },
    });

    if (!order) {
      throw new Error('A rendelés nem található.');
    }

    if (order.status !== 'CART') {
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
    }

    await prisma.herbOnOrder.deleteMany({
      where: { orderID },
    });
    const deletedOrder = await prisma.order.delete({
      where: { id: orderID },
    });
    return deletedOrder;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma deleteOrderById finished');
  }
};

const removeItemFromOrder = async (orderID, herbID) => {
  let item;
  try {
    await prisma.$transaction(async () => {
      item = await prisma.herbOnOrder.findUnique({
        where: {
          herbID_orderID: {
            herbID,
            orderID,
          },
        },
      });

      if (!item) {
        throw new Error('A termék nem található a rendelésben.');
      }

      await prisma.herbOnOrder.delete({
        where: {
          herbID_orderID: {
            herbID,
            orderID,
          },
        },
      });

      const remainingItems = await prisma.herbOnOrder.findMany({
        where: { orderID },
      });

      if (remainingItems.length === 0) {
        await prisma.order.delete({
          where: { id: orderID },
        });
      }
    });
    return item;
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma RemoveItemFromOrder finished');
  }
};

const clearCartAndCheckOrder = async orderID => {
  try {
    return await prisma.$transaction(async () => {
      const order = await prisma.order.findUnique({
        where: { id: orderID },
      });

      if (!order) {
        throw new Error('Rendelés nem található.');
      }

      if (order.status === 'CART') {
        await prisma.herbOnOrder.deleteMany({
          where: { orderID },
        });

        await prisma.order.delete({
          where: { id: orderID },
        });
        return { message: 'Cart cleared and order deleted.' };
      }

      return order;
    });
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await prisma.$disconnect();
    console.log('Prisma clearCartAndCheckOrder  finished');
  }
};

export default {
  getOrderById,
  getAllOrders,
  createOrder,
  updateCartItem,
  finalizeOrder,
  updateClosedOrder,
  deleteOrderById,
  getAllOrdersOfUser,
  removeItemFromOrder,
  clearCartAndCheckOrder,
};
