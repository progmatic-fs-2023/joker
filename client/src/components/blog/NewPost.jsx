import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useBlog from '../../hooks/useBlog';
import FileInput from '../micro/FileInput';

function NewPost() {
  const {
    handleSubmit,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
    postPictureLink,
    setPostPictureLink,
  } = useBlog();
  return (
    <main className="create-blog">
      <h3 className="text-center my-3">Új bejegyzés</h3>
      <div className="mx-auto w-50 text-center">
        <FileInput />
        <Form.Control
          placeholder="a bejegyzés címe"
          className="my-2"
          required
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <Form.Control
          placeholder="ez itt a tartalom helye"
          className="my-2"
          required
          as="textarea"
          rows={15}
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <Form.Control
          placeholder="képhivatkozás webcíme (vesszőkkel elválasztva több is)"
          className="my-2"
          type="text"
          value={postPictureLink}
          onChange={(e) => setPostPictureLink(e.target.value)}
        />
        <Button className="text-center" variant="outline-success" size="md" onClick={handleSubmit}>
          Mentés
        </Button>
      </div>
    </main>
  );
}

export default NewPost;
