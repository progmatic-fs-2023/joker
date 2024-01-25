import React, { useState, useEffect } from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardKitchenSink from '../components/CardKitchenSink';
import StarRating from '../components/micro/StarRating';
import useAuth from '../hooks/useAuth';
import { API_URL } from '../constants';

function SearchPage() {
  const [searchResults, setSearchResults] = useState({
    posts: [],
    feedbacks: [],
    herbs: [],
    query: '',
  });
  const { auth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const fetchSearchResults = async (query) => {
    try {
      const response = await fetch(`${API_URL}/search?query=${query}`);
      if (!response.ok) {
        throw new Error('A keresési válasz nem érkezett meg.');
      }
      const data = await response.json();
      setSearchResults({ ...data, query });
    } catch {
      setSearchResults({ posts: [], feedbacks: [], herbs: [], query });
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    if (query) {
      fetchSearchResults(query);
    }
  }, [location]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Keresési eredmények: {searchResults.query}</h1>
      {searchResults.herbs.length === 0 &&
      searchResults.posts.length === 0 &&
      searchResults.feedbacks.length === 0 ? (
        <p>Nincs találat</p>
      ) : (
        <>
          {searchResults.herbs.length > 0 && (
            <>
              <h2 className="mb-3">Gyógynövények</h2>
              <Row xs={1} md={2} lg={3} className="g-4">
                {searchResults.herbs.map((herb) => (
                  <Col key={herb.id}>
                    <CardKitchenSink stockItem={herb} />
                  </Col>
                ))}
              </Row>
            </>
          )}

          {searchResults.feedbacks.length > 0 && (
            <>
              <h2 className="mb-3">Visszajelzések</h2>
              {searchResults.feedbacks.map((feedback) => (
                <Col key={feedback.id}>
                  <Card>
                    <Card.Body className="d-flex align-items-center">
                      <Card.Img
                        variant="top"
                        className="img-fluid"
                        style={{ maxHeight: '100px', width: '100px', marginRight: '10px' }}
                        src={feedback.targetHerb.image[0]}
                      />
                      <div>
                        <Card.Title className="mb-0">
                          <NavLink
                            to={`/product/${feedback.targetHerb.id}`}
                            className="text-decoration-none"
                          >
                            {feedback.targetHerb.herbName}-{feedback.title}
                          </NavLink>
                        </Card.Title>
                        <Card.Text>{feedback.summary}</Card.Text>
                        <StarRating rating={feedback.rating} />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </>
          )}
          {searchResults.posts.length > 0 && (
            <>
              <h2 className="mb-3">Posztok</h2>
              {searchResults.posts.map((post) => (
                <Col key={post.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <NavLink
                          to={
                            auth === 'SUPERADMIN'
                              ? navigate(`/post/${post.id}`)
                              : navigate(`/read/${post.id}`)
                          }
                          className="text-decoration-none"
                        >
                          {post.title}
                        </NavLink>
                      </Card.Title>
                      <Card.Text>{post.summary}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SearchPage;
