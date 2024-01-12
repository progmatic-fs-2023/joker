import { Route, Routes } from 'react-router-dom';
import CartProvider from './components/CartProvider';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import UserForm from './pages/UserForm';
import SuccessfulOrder from './pages/SuccessfulOrder';
import Contact from './pages/Contact';
import HowToBuy from './pages/HowToBuy';
import Questionare from './pages/Questionare';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';
import UsersPage from './pages/UsersPage';
import './App.css';
import Basket from './pages/Basket';
import Payment from './pages/Payment';
import PurchaseHistory from './pages/PurchaseHistory';
import Logout from './pages/Logout';


function App() {

  return (
    <CartProvider>
      <Routes>
        {/* public routes */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='blog' element={<Blog />} />
          <Route path="userform" element={<UserForm />} />
          <Route path="successfulorder" element={<SuccessfulOrder />} />
          <Route path='contact' element={<Contact />} />
          <Route path='howtobuy' element={<HowToBuy />} />
          <Route path='questionare' element={<Questionare />} />
          <Route path='sitemap' element={<Sitemap />} />
          <Route path='notfound' element={<NotFound />} />
          <Route path='userspage' element={<UsersPage />} />
          <Route path='basket' element={<Basket />} />
          <Route path='payment' element={<Payment />} />
          <Route path='purchasehistory' element={<PurchaseHistory />} />
          <Route path='logout' element={<Logout />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
