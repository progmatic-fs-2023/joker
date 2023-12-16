import { Route, Routes } from 'react-router-dom';
import SuccessfulOrder from './pages/SuccessfulOrder';
import userOrder from '../order';
import UserForm from './pages/UserForm';
import Layout from './components/Layout';
import Home from './pages/Home';
import './App.css';

function App() {
  // Sample Array with products

  const order = userOrder[0];
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="UserForm" element={<UserForm />} />
        <Route
          path="SuccessfulOrder"
          element={
            <SuccessfulOrder
              orderID={order.orderID}
              orderList={order.orderedItems}
              currencyCode={order.currencyCode}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
