import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

function Post({ post }) {
  const clearedBody = DOMPurify.sanitize(post.body);
  const bodyToText = clearedBody.replace(/(<([^>]+)>)/gi, '');
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
      </Link>
      <div
        style={{ color: 'whitesmoke' }}
        className="postBody"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(`${bodyToText.substring(0, 100)}...`),
        }}
      />
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
