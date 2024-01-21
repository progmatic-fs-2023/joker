import { Link } from 'react-router-dom';
import PostIntro from '../micro/PostIntro';
import uniqueKeyGenerator from '../../helpers/uniqueKeyGenerator';

function PostList({ posts }) {
  return (
    posts &&
    posts.map((post) => (
      <div className="m-4" key={post.id}>
        <Link style={{ textDecoration: 'none' }} to={`/post/${post.id}`}>
          <PostIntro key={uniqueKeyGenerator()} postObject={post} author={post.authorID} />
        </Link>
      </div>
    ))
  );
}

export default PostList;
