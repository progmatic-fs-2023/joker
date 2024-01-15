import ordersServices from '../services/ordersServices';

const getOrder = async (req, res) => {
  const { id } = req.params;
  // console.log('orderID ok!', id);
  try {
    const order = await ordersServices.getOrderById(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const listOrders = async (req, res) => {
//   try {

//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const create = async (req, res) => {
  try {
    const { userID, herbID, quantity, orderID } = req.body;
    const cart = await ordersServices.createOrder(userID, herbID, quantity, orderID);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { orderID, herbID, newQuantity } = req.body;
    const updatedCart = await ordersServices.updateCartItem(orderID, herbID, newQuantity);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const finalize = async (req, res) => {
  try {
    const { orderID } = req.body;
    const order = await ordersServices.finalizeOrder(orderID);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await ordersServices.deleteOrderById(id);
    res.status(200).json({ message: 'Rendelés sikeresen törölve.', deletedOrder });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Hiba történt a rendelés törlése közben.', details: error.message });
  }
};

const userOrderList = async (req, res) => {
  const userId = req.body?.id;
  try {
    const response = await ordersServices.getAllOrdersOfUser(userId);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Hiba történt a user összes rendelése lekérdezése közben.',
      details: error.message,
    });
  }
};

const singleOrderOfUser = async (req, res) => {
  try {
    console.log('successful get/:id', req.params.id);
    const userOrder = await ordersServices.getOrderById(req.params.id);
    if (!userOrder) {
      return res.status(400).json({ message: `User order with ID ${req.body.id} not found` });
    }
    res.status(200).json({ userOrder });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Hiba történt a user rendelés lekérdezése közben.', details: error.message });
  }
  return null;
};

const orderList = async (req, res) => {
  // TODO Bearer -> userId
  try {
    const userId = req.body?.id;
    const customer = req.headers?.user;
    console.log('Orders userId', userId);
    console.log('Orders customer', customer);
    if (!userId && !customer) {
      const orders = await ordersServices.getAllOrders();
      res.status(200).json(orders);
    } else if (!customer) {
      const orders = await ordersServices.getAllOrdersOfUser(userId);
      res.status(200).json(orders);
    } else if (!userId) {
      const orders = await ordersServices.getAllOrdersOfUser(customer);
      res.status(200).json(orders);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Hiba történt a user összes rendelése lekérdezése közben.',
      details: error.message,
    });
  }
};

const removeItem = async (req, res) => {
  const { orderID, herbID } = req.body;

  try {
    const updatedOrder = await ordersServices.removeItemFromOrder(orderID, herbID);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Hiba történt a termék eltávolítása közben.', error: error.message });
  }
};
const clearCart = async (req, res) => {
  try {
    await ordersServices.clearCartAndCheckOrder(req.params.orderId);
    res.status(200).json({ message: 'Cart cleared, order deleted if needed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getOrder,
  create,
  update,
  finalize,
  deleteOrder,
  userOrderList,
  singleOrderOfUser,
  orderList,
  removeItem,
  clearCart,
};
