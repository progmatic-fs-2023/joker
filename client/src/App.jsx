import { Route, Routes } from 'react-router-dom';
import CartProvider from './components/CartProvider';
import { AuthProvider } from './contexts/AuthProvider';
import { BlogProvider } from './contexts/BlogProvider';
import Layout from './components/Layout';
import RequireAuth from './components/secure/RequireAuth';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import UserForm from './pages/UserForm';
import SuccessfulOrder from './pages/SuccessfulOrder';
import Contact from './pages/Contact';
import HowToBuy from './pages/HowToBuy';
import Questionare from './pages/Questionare';
import Sitemap from './pages/Sitemap';
import Login from './components/Login';
import Register from './components/Register';
import Lounge from './components/secure/Lounge';
import UserEditor from './components/user/UserEditor';
import User from './components/user/User';
import FeedLayout from './components/blog/FeedLayout';
import Blog from './pages/Blog';
import Feed from './components/blog/Feed';
import NewPost from './components/blog/NewPost';
import PostPage from './components/blog/PostPage';
import Unauthorized from './components/secure/Unauthorized';
import NotFound from './pages/NotFound';
import ProtectedLayout from './components/secure/ProtectedLayout';
import Payment from './pages/Payment';
import Logout from './pages/Logout';
import UserOrderList from './components/user/UserOrderList';
import HerbEditor from './components/user/HerbEditor';
import OrderEditor from './components/order/OrderEditor';
import Missing from './components/blog/Missing';
import ASZF from './pages/Aszf';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BlogProvider>
          <Routes>
            <Route element={<Layout />}>
              {/* public routes */}
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<Product />} />
              {/* <Route path="blog" element={<Blog />} /> */}
              <Route path="read" element={<Blog />} />
              <Route path="read/:id" element={<PostPage />} />
              <Route path="userform" element={<UserForm />} />
              <Route path="successfulorder" element={<SuccessfulOrder />} />
              <Route path="contact" element={<Contact />} />
              <Route path="howtobuy" element={<HowToBuy />} />
              <Route path="questionare" element={<Questionare />} />
              <Route path="sitemap" element={<Sitemap />} />
              <Route path="payment" element={<Payment />} />
              <Route path="logout" element={<Logout />} />
              <Route path="aszf" element={<ASZF />} />
              {/* public auth routes */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="unauthorized" element={<Unauthorized />} />
              <Route path="search" element={<SearchPage />} />
              <Route element={<ProtectedLayout />}>
                {/* protect these routes */}
                <Route element={<RequireAuth allowedRoles={['BASIC', 'ADMIN', 'SUPERADMIN']} />}>
                  <Route index path="lounge" element={<Lounge />} />
                  <Route path="orderlist" element={<UserOrderList />} />
                  <Route path="user" element={<User />} />
                  <Route element={<RequireAuth allowedRoles={['ADMIN', 'SUPERADMIN']} />}>
                    <Route path="herbeditor" index element={<HerbEditor />} />
                    <Route path="ordereditor" element={<OrderEditor />} />
                    <Route element={<FeedLayout />}>
                      <Route index path="feed" element={<Feed />} />
                      <Route path="newpost" index element={<NewPost />} />
                      <Route path="post/:id" element={<PostPage />} />
                      <Route path="*" element={<Missing />} />
                    </Route>
                  </Route>
                </Route>
                <Route element={<RequireAuth allowedRoles={['SUPERADMIN']} />}>
                  <Route path="usereditor" element={<UserEditor />} />
                </Route>
              </Route>
            </Route>
            {/* catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BlogProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
