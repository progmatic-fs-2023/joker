import PropTypes from 'prop-types';
import Post from './Post';

function FeedList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

FeedList.propTypes = {
  posts: PropTypes.arrayOf({
    post: PropTypes.shape({
      id: PropTypes.string,
      body: PropTypes.string,
      title: PropTypes.string,
      datetime: PropTypes.string,
    }),
  }).isRequired,
};

export default FeedList;
