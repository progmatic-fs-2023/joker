import useFetch from '../hooks/useFetch';
import { AUTH_URL } from '../constants';
import PostList from '../components/blog/PostList';
import ReadOnlyPostList from '../components/blog/ReadOnlyPostList';
import useAuth from '../hooks/useAuth';

function Blog() {
  const { auth } = useAuth();
  // TODO handle errors, pending states if fetch failed
  const { data: blogPosts } = useFetch(`${AUTH_URL}/read`);

  return auth?.role === 'SUPERADMIN' ? (
    <>
      <h3 className="blog-title text-center">Herbalism Magazin | Cikkek, érdekességek</h3>
      <div className="text-center" style={{ margin: 'auto', maxWidth: '75%' }}>
        <PostList posts={blogPosts} />
      </div>
    </>
  ) : (
    <>
      <h3 className="blog-title text-center">Herbalism Magazin | Cikkek, érdekességek</h3>
      <div className="text-center" style={{ margin: 'auto', maxWidth: '75%' }}>
        <ReadOnlyPostList posts={blogPosts} />
      </div>
    </>
  );
}

export default Blog;
