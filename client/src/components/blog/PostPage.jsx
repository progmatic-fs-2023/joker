import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';
import useBlog from '../../hooks/useBlog';
import useAuth from '../../hooks/useAuth';
// import FliudPic from '../micro/FliudPic';
import ImageSliderMini from '../micro/ImageSliderMini';

function PostPage() {
  const { id } = useParams();
  const { auth } = useAuth();
  const { posts, handleDelete } = useBlog();
  const post = posts?.find((singlePost) => singlePost.id.toString() === id);
  return (
    <main className="post-page m-5 text-center">
      <article className="post">
        {post && (
          <div
            className="div-image mx-auto p-5"
            style={{
              background: `whitesmoke`,
              borderRadius: '14px',
            }}
          >
            <h2>{post.title}</h2>
            <p className="postDate">Létrehozva: {format(post.createdAt, 'yyyy-MM-dd ')}</p>
            {/* {post.pictures[0] && post.pictures.map(img => <FliudPic imageSrc={img} width="20%" />)} */}
            {post.pictures[0] && <ImageSliderMini images={post.pictures} />}
            <div
              className="postBody"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.body) }}
            />
            <p className="postRating">Értékelés: {post.rating}</p>
            <p className="postAuthor">
              Szerző: {post.authorFirstName} {post.authorLastName}
            </p>
            <p className="postLikes">
              Kedvelik: {post.authorFirstName} {post.authorLastName}
            </p>
            {/* {post.pictures[0] && <img src={post.pictures[0]} alt="eso_kep" />} */}
            {auth?.role === 'SUPERADMIN' && (
              <Button variant="outline-danger" onClick={() => handleDelete(post.id)}>
                Poszt törlése
              </Button>
            )}
          </div>
        )}
        {!post && (
          <>
            <h2>Nem található poszt</h2>
            <p>Well, that is disappointing. :(</p>
            <p>
              <Link to="/feed">A magazin kezdőoldalára</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}

export default PostPage;
