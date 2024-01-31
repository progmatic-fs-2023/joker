import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import useBlog from '../../hooks/useBlog';
// import TextInput from '../micro/TextInput';

function BlogNav() {
  // const { search, setSearch } = useBlog();
  return (
    <div className="text-center">
      {/* <TextInput /> */}
      {/* <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <input
          style={{ width: '35vw', borderRadius: '6px', padding: '5px' }}
          id="search"
          type="text"
          placeholder="Keresés a posztok között"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form> */}
      <Nav variant="tabs" defaultActiveKey="link-1">
        <Nav.Item>
          <Nav.Link as={Link} to="feed" eventKey="link-1">
            Cikkek
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="newpost" eventKey="link-2">
            Cikkírás
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="about" eventKey="link-3" disabled>
            A szerzőkről
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default BlogNav;
