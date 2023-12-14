import './App.css';
import { useEffect, useState } from 'react';
import { API_URL } from './constants';
import SuccessfulOrder from './pages/SuccessfulOrder.jsx';
import userOrder from '../order.js';

function App() {
  const [isConnect, setIsConnect] = useState(false);
  const order = userOrder[0]
  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
    });
  }, []);

  useEffect(() => {
    console.log(isConnect);
  }, []);

  return (
    <div>
      Hello project!
      <ul>
        <li>
          {isConnect ? '✅' : '️❗️'} Connect to backend {!isConnect && 'failed'}
        </li>
      </ul>
      <SuccessfulOrder orderID={order.orderID} orderList={order.orderedItems} currencyCode={order.currencyCode} />
    </div>
  );
}

export default App;