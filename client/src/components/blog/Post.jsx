import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
      </Link>
      <p className="postBody">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 100)}...`}
      </p>
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    datetime: PropTypes.string,
    body: PropTypes.string,
    map: PropTypes.func,
    length: PropTypes.func,
    slice: PropTypes.func,
  }).isRequired,
};

export default Post;
