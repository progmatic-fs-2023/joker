import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import useAuth from '../hooks/useAuth';
import { AUTH_URL } from '../constants';

function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const userName = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userName.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, pwd }),
        credentials: 'include',
      };
      const answer = await fetch(`${AUTH_URL}/auth`, fetchOptions);
      const response = await answer.json();
      const accessToken = response?.accessToken;
      const role = response?.role;
      const userId = response?.userId;
      setAuth({ user, role, accessToken, userId });
      setUser('');
      setPwd('');
      navigate('/dashboard', { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="p-5">
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
        {errMsg}
      </p>

      <Card style={{ width: '400px', margin: '0 auto' }}>
        <Card.Body>
          <h5 className="card-title text-center">Bejelentkezés</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="pl. user@mail.hu"
                name="email"
                ref={userName}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <Form.Text className="text-muted">Az email címedet sosem osztjuk meg.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Jelszó:</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Írd be a jelszavad"
                name="password"
                value={pwd}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Jegyezzen meg ebben a böngészőben" />
            </Form.Group>
            <Button variant="outline-success" type="submit" className="w-100">
              Bejelentkezés
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <p className="text-center mt-3">
        Nincs még fiókod?
        <br />
        <span className="line">
          <Link to="/register">Regisztráció</Link>
        </span>
      </p>
    </div>
  );
}

export default Login;
