import Nav from 'react-bootstrap/Nav';
import { FaFacebook } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoDocumentText } from 'react-icons/io5';

function FooterNavs() {
  return (
    <Nav className="justify-content-center text-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link className="img-fluid rounded-4 hover-shadow text-white" href="/home">
          <IoDocumentText size={22} className="mb-2 me-1" />
          ASZF
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/" className="text-white">
          <MdOutlineAlternateEmail size={22} className="mb-2 me-1" />
          E-mail
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/" className='text-white'>
          <FaFacebook size={22} className="mb-2 me-1" />
          Facebook
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default FooterNavs;
