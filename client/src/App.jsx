import { Route, Routes } from 'react-router-dom';
import CartProvider from './components/CartProvider';
import SuccessfulOrder from './pages/SuccessfulOrder';
import UserForm from './pages/UserForm';
import Layout from './components/Layout';
import Home from './pages/Home';
import './App.css';

function App() {

  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="userform" element={<UserForm />} />
          <Route
            path="successfulorder"
            element={
              <SuccessfulOrder
                currencyCode={1}
              />
            }
          />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
