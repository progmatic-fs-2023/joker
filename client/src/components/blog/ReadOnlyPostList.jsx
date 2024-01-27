import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostIntro from '../micro/PostIntro';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';

function ReadOnlyPostList({ posts }) {
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div className="m-4" key={post.id}>
            <Link style={{ textDecoration: 'none' }} to={`/read/${post.id}`}>
              <PostIntro key={uniqueKeyGenerator()} postObject={post} author={post.authorID} />
            </Link>
          </div>
        ))}
    </div>
  );
}

ReadOnlyPostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      authorID: PropTypes.string,
      id: PropTypes.string,
      body: PropTypes.string,
      title: PropTypes.string,
      createdAt: PropTypes.string,
      likedByID: PropTypes.string,
      pictures: PropTypes.arrayOf(PropTypes.string),
      rating: PropTypes.number,
      updatedAt: PropTypes.string,
    }),
  ),
};

ReadOnlyPostList.defaultProps = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      authorID: PropTypes.string,
      id: PropTypes.string,
      body: PropTypes.string,
      title: PropTypes.string,
      createdAt: PropTypes.string,
      likedByID: PropTypes.string,
      pictures: PropTypes.arrayOf(PropTypes.string),
      rating: PropTypes.number,
      updatedAt: PropTypes.string,
    }),
  ),
};

export default ReadOnlyPostList;
