import { Outlet } from 'react-router-dom';
import BlogNav from './BlogNav';

function FeedLayout() {
  return (
    <div className="blog-admin my-2">
      <BlogNav />
      <Outlet />
    </div>
  );
}

export default FeedLayout;
