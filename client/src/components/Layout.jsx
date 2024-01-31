import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div id="main-container">
      <Header />
      <Container fluid className="flex-grow-1 pe-0 ps-0" id="content">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
