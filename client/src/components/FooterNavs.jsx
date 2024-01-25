import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function FooterNavs() {
  return (
    <Nav className="flex-column">
      <Nav.Link as={NavLink} to="/aszf">
        ÁSZF
      </Nav.Link>
      <span>Kapcsolat: info@herbalism.hu</span>
      <Nav.Link>
        <FaFacebook /> <FaTwitter /> <FaInstagram />
      </Nav.Link>
    </Nav>
  );
}

export default FooterNavs;
