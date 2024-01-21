import useFetch from '../hooks/useFetch';
import { API_URL } from '../constants';
import PostList from '../components/blog/PostList';

function Blog() {
  // TODO handle errors, pending states if fetch failed
  const { data: blogPosts } = useFetch(`${API_URL}/blog`);

  return (
    <>
      <h3 className="text-center">Herbalism Magazin | Cikkek, érdekességek</h3>
      <div className="text-center" style={{ margin: 'auto', maxWidth: '75%' }}>
        <PostList posts={blogPosts} />
      </div>
    </>
  );
}

export default Blog;
