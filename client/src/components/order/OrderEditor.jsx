import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useCart } from '../../hooks/useCart';
import { API_URL } from '../../constants';
import OrderAccordion from '../secure/OrderAccordion';

function OrderEditor() {
  const { data } = useFetch(`${API_URL}/orders`);
  const [allOrders, setAllOrders] = useState([]);
  const { clearCart } = useCart();
  const fetchOrders = async () => {
    const response = await fetch(`${API_URL}/orders`);
    if (!response.ok) {
      throw new Error(`Couldn't fetch update data, status: ${response.status}`);
    }
    const responseData = await response.json();
    setAllOrders([...responseData]);
  };

  const saveModifiedOrder = async (updatedOrder) => {
    if (!updatedOrder?.quantity) return null;
    const newQuantity = updatedOrder?.quantity.map((item) => ({
      herbID: item.herbID,
      newQty: item.quantity,
    }));
    const fetchOptions = {
      method: 'PATCH',
      // TODO verify the user trough middleware
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        id: updatedOrder.id,
        herbs: newQuantity,
      }),
    };
    const response = await fetch(`${API_URL}/orders/update`, fetchOptions);
    if (!response.ok) {
      throw new Error(`Couldn't fetch user data, status: ${response.status}`);
    }
    await response.json();
    fetchOrders();
    return null;
  };

  const deleteMe = async (orderId) => {
    const fetchOptions = {
      method: 'DELETE',
      // TODO verify the user trough middleware
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    const response = await fetch(`${API_URL}/orders/${orderId}`, fetchOptions);
    if (!response.ok) {
      throw new Error(`Couldn't fetch user data, status: ${response.status}`);
    }
    await response.json();
    fetchOrders();
    clearCart();
  };

  useEffect(() => {
    setAllOrders(data);
  }, [data]);

  return (
    <div className="text-center mx-auto w-75">
      {/* <DivImage imgLink='/img/handful_herbs.png' height='25vh' width='65vw' />
            <DivImage imgLink='/img/salat.jpg' height='25vh' width='65vw' /> */}
      <OrderAccordion
        allOrders={allOrders}
        deleteMe={deleteMe}
        saveModifiedOrder={saveModifiedOrder}
      />
    </div>
  );
}

export default OrderEditor;
