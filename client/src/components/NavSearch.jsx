import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OffCanvasCart from './OffCanvasCart';
import useAuth from '../hooks/useAuth';
import SignedIn from './secure/SignedIn';
import { API_URL } from '../constants';

function NavSearch() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`${API_URL}/search/suggestions?query=${query}`);
      if (!response.ok) {
        throw new Error('Probléma a javaslatok lekérésénél.');
      }
      const data = await response.json();
      if (data.length === 0) {
        return [{ text: 'Nincs találat', type: 'none', id: null }];
      }
      return [{ text: 'Összes találat', type: 'all', id: null }, ...data];
    } catch {
      return [{ text: 'Nincs találat', type: 'none', id: null }];
    }
  };

  const handleSearchTextChange = async (e) => {
    const { value } = e.target;
    setSearchText(value);
    if (value.trim().length >= 3) {
      setIsSearching(true);
      const fetchedSuggestions = await fetchSuggestions(value.trim());
      setSuggestions(fetchedSuggestions);
    } else {
      setIsSearching(false);
      setSuggestions([]);
    }
  };

  const selectSuggestion = (suggestion) => {
    setSearchText('');
    setSuggestions([]);

    switch (suggestion.type) {
      case 'herb':
        navigate(`/product/${suggestion.id}`);
        break;
      case 'feedback':
        navigate(`/product/${suggestion.id}`);
        break;
      case 'post':
        navigate(auth === 'SUPERADMIN' ? `/post/${suggestion.id}` : `/read/${suggestion.id}`);
        break;
      case 'all':
        navigate(`/search?query=${encodeURIComponent(searchText)}`);
        break;
      case 'none':
        break;
      default:
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchText.trim().length >= 3) {
      e.preventDefault();
      navigate(`/search?query=${encodeURIComponent(searchText)}`);
      setSearchText('');
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex text-center">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          Kezdőlap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="d-flex align-items-center me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Magazin
            </Nav.Link>
            {auth?.role ? (
              <SignedIn user={auth.user} />
            ) : (
              <NavDropdown title="Felhasználóknak" id="navbarScrollingDropdown">
                <NavDropdown.Item as={NavLink} to="/login">
                  Belépés
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/register">
                  Regisztráció
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/howtobuy">
                  Vásárlás menete
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Form className="d-flex position-relative dropdown" onSubmit={(e) => e.preventDefault()}>
            {isSearching && searchText.trim().length > 0 && (
              <div
                style={{
                  width: '1',
                  height: '1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '15px',
                }}
              >
                <Spinner animation="border" role="status" style={{ color: 'aqua' }} />
              </div>
            )}
            <div style={{ position: 'relative', width: '100%' }}>
              <Form.Control
                type="search"
                placeholder="Itt kereshetsz"
                className="me-2"
                aria-label="Search"
                value={searchText}
                onChange={handleSearchTextChange}
                onKeyDown={handleKeyDown}
              />
              {isSearching && searchText.trim().length > 0 && (
                <ul
                  className="dropdown-menu show text-center"
                  style={{ width: '100%', top: '38px', left: 0 }}
                >
                  {suggestions.map((suggestion, index) => (
                    <li key={suggestion.id || index} className="dropdown-item">
                      {suggestion.type === 'category' ? (
                        <div
                          className="dropdown-header   no-hover"
                          style={{
                            cursor: 'default',
                          }}
                        >
                          {suggestion.text}
                        </div>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-link p-0"
                          style={{
                            width: '100%',
                            textAlign: 'center',
                            textDecoration: 'none',
                            color: 'inherit',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.textDecoration = 'underline';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.textDecoration = 'none';
                          }}
                          onClick={() => selectSuggestion(suggestion)}
                        >
                          {suggestion.text}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <OffCanvasCart placement="end" name="Kosár" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSearch;
