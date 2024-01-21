import FeedList from './FeedList';
import useBlog from '../../hooks/useBlog';

function Feed() {
  const { posts, searchResults } = useBlog();

  return (
    <main className="blog-home text-center">
      {posts ? (
        <FeedList posts={searchResults} />
      ) : (
        <p style={{ marginTop: '2rem' }}>Nincsenek megjeleníthető magazin posztok.</p>
      )}
    </main>
  );
}

export default Feed;
