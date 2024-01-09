import { Route, Routes } from 'react-router-dom';
import CartProvider from './components/CartProvider';
import { AuthProvider } from './contexts/AuthProvider';
import Layout from './components/Layout';
import RequireAuth from './components/secure/RequireAuth';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import UserForm from './pages/UserForm';
import SuccessfulOrder from './pages/SuccessfulOrder';
import Contact from './pages/Contact';
import HowToBuy from './pages/HowToBuy';
import Questionare from './pages/Questionare';
import Sitemap from './pages/Sitemap';
import Login from './components/Login'
import Register from './components/Register'
import Lounge from './components/secure/Lounge'
import Dashboard from './pages/Dashboard'
import UserEditor from './components/secure/UserEditor'
import BlogEditor from './components/secure/BlogEditor'
import Unauthorized from './components/secure/Unauthorized'
import NotFound from './pages/NotFound';
import ProtectedLayout from './components/secure/ProtectedLayout';
import './App.css';
import Basket from './pages/Basket';
import Payment from './pages/Payment';
import PurchaseHistory from './pages/PurchaseHistory';
import Logout from './pages/Logout';
import UsersPage from './pages/UsersPage'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>

          <Route element={<Layout />}>

            {/* public routes */}
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='blog' element={<Blog />} />
            <Route path="userform" element={<UserForm />} />
            <Route path="successfulorder" element={<SuccessfulOrder />} />
            <Route path='contact' element={<Contact />} />
            <Route path='howtobuy' element={<HowToBuy />} />
            <Route path='questionare' element={<Questionare />} />
            <Route path='sitemap' element={<Sitemap />} />
            <Route path='userspage' element={<UsersPage />} />
            <Route path='basket' element={<Basket />} />
            <Route path='payment' element={<Payment />} />
            <Route path='purchasehistory' element={<PurchaseHistory />} />
            <Route path='logout' element={<Logout />} />
            {/* public auth routes */}
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path="unauthorized" element={<Unauthorized />} />

            <Route element={<ProtectedLayout />}>

              {/* protect these routes */}
              <Route element={<RequireAuth allowedRoles={['BASIC', 'ADMIN', 'SUPERADMIN']} />}>

                <Route path="dashboard" index element={<Dashboard />} />
                <Route path="lounge" element={<Lounge />} />

                <Route element={<RequireAuth allowedRoles={['ADMIN', 'SUPERADMIN']} />}>
                  <Route path="editor" element={<UserEditor />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={['SUPERADMIN']} />}>
                  <Route path="blog" element={<BlogEditor />} />
                </Route>
              </Route>

            </Route>

            {/* catch all route */}
            <Route path='*' element={<NotFound />} />

          </Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
