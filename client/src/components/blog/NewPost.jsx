import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useBlog from '../../hooks/useBlog';

function NewPost() {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } = useBlog();
  return (
    <main className="create-blog">
      <h3 className="text-center my-3">Új bejegyzés</h3>
      <div className="mx-auto w-50 text-center">
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
        <Button className="text-center" variant="outline-success" size="md" onClick={handleSubmit}>
          Mentés
        </Button>
      </div>
    </main>
  );
}

export default NewPost;
