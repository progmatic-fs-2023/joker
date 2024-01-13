import {
  getOrderById,
  getAllOrders,
  createOrder,
  updateCartItem,
  finalizeOrder,
  deleteOrderById,
} from '../services/orderService';

const getOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await getOrderById(orderId);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const listOrders = async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { userID, herbID, quantity, orderID } = req.body;
    const cart = await createOrder(userID, herbID, quantity, orderID);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { orderID, herbID, newQuantity } = req.body;
    const updatedCart = await updateCartItem(orderID, herbID, newQuantity);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const finalize = async (req, res) => {
  try {
    const { orderID } = req.body;
    const order = await finalizeOrder(orderID);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { orderID } = req.params;
    const deletedOrder = await deleteOrderById(orderID);
    res.status(200).json({ message: 'Rendelés sikeresen törölve.', deletedOrder });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Hiba történt a rendelés törlése közben.', details: error.message });
  }
};

export default { getOrder, listOrders, create, update, finalize, deleteOrder };
