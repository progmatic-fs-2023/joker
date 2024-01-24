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
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      authorID: PropTypes.string,
      id: PropTypes.string,
      body: PropTypes.string,
      title: PropTypes.string,
      createdAt: PropTypes.string,
      likedByID: PropTypes.string,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
      rating: PropTypes.number,
      updatedAt: PropTypes.string,
    }),
  ).isRequired,
};

export default FeedList;
