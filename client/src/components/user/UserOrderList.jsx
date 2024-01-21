import { useState, useEffect } from 'react';
import { API_URL } from '../../constants';
import useAuth from '../../hooks/useAuth';
import OrderAccordion from '../secure/OrderAccordion';

function UserOrderList() {
  const { auth } = useAuth();
  const [currentUserOrders, setCurrentUserOrders] = useState([]);

  const fetchOrders = async () => {
    const fetchOptions = {
      method: 'GET',
      // TODO verify the user trough middleware
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.accessToken}`,
        user: `${auth.userId}`,
      },
      credentials: 'include',
    };
    const response = await fetch(`${API_URL}/orders`, fetchOptions);

    if (!response.ok) {
      throw new Error(`Couldn't fetch user data, status: ${response.status}`);
    }
    const data = await response.json();
    // console.log('after fetch', data)
    setCurrentUserOrders([...data]);
  };

  useEffect(() => {
    fetchOrders();
  }, [auth]);

  return (
    <div className="mx-auto w-75">
      <OrderAccordion allOrders={currentUserOrders} fetchOrders={fetchOrders} />
    </div>
  );
}

export default UserOrderList;
