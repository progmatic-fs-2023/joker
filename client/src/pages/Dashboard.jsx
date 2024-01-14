import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import OrderAccordion from "../components/secure/OrderAccordion"
import {API_URL} from "../constants";

function Dashboard() {
  const { auth } = useAuth();
  const [currentUserOrders, setCurrentUserOrders] = useState([])

  const fetchOrdersOfUser = async () => {
    const fetchOptions = {
      method: "GET",
      // TODO verify the user trough middleware
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${auth.accessToken}`,
        'user': `${auth.userId}`
      },
      credentials: 'include',
    }
    const response = await fetch(`${API_URL}/orders`, fetchOptions);
    if (!response.ok) {
      throw new Error(`Couldn't fetch user data, status: ${response.status}`);
    }
    const data = await response.json();
    setCurrentUserOrders([...data]);
  }

  useEffect(() => {
    fetchOrdersOfUser()
  }, [auth])

  return (
    <div className="dashboard text-center m-5">
      <h4>Üdv újra itt {auth?.user}!</h4>
      <p >Dashboard tartalom</p>
      <OrderAccordion userOrder={currentUserOrders} fetchOrdersOfUser={fetchOrdersOfUser}/>
    </div>
  )
}

export default Dashboard
