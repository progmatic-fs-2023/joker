import { useState, useEffect } from 'react';
import Order from './Order';
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../constants';

function OrderEditor() {
  const { data } = useFetch(`${API_URL}/orders`);
  const [allOrders, setAllOrders] = useState([]);
  const [modifyOrder, setModifyOrder] = useState(false);
  const [modifiedOrder, setModifiedOrder] = useState([]);

  const fetchOrders = async () => {
    // const fetchOptions = {
    //   method: 'GET',
    //   // TODO verify the user trough middleware
    //   headers: {
    //     'Content-Type': 'application/json',
    //     authorization: `Bearer ${auth.accessToken}`,
    //     user: `${auth.userId}`,
    //   },
    //   credentials: 'include',
    // };
    // const response = await fetch(`${API_URL}/orders`, fetchOptions);
    const response = await fetch(`${API_URL}/orders`);
    if (!response.ok) {
      throw new Error(`Couldn't fetch user data, status: ${response.status}`);
    }
    const responseData = await response.json();
    setAllOrders([...responseData]);
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
  };

  const modifyMe = async (orderId) => {
    setModifyOrder(!modifyOrder);
    return allOrders.filter((item) => orderId === item.id);
    // fetchOrders()
  };

  useEffect(() => {
    setAllOrders(data);
    // console.log('allorder:', allOrders)
  }, [data]);

  return (
    <div className="text-center mx-auto w-75">
      {/* <DivImage imgLink='/img/handful_herbs.png' height='25vh' width='65vw' />
            <DivImage imgLink='/img/salat.jpg' height='25vh' width='65vw' /> */}
      <Order
        modifiedOrder={modifiedOrder}
        setModifiedOrder={setModifiedOrder}
        allOrders={allOrders}
        deleteMe={deleteMe}
        modifyMe={modifyMe}
        fetchOrders={fetchOrders}
        modifyOrder={modifyOrder}
      />
    </div>
  );
}

export default OrderEditor;
