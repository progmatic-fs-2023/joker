import { useRef, useState, useEffect } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import validator from 'validator';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { AUTH_URL } from '../../constants';
import AlertInfo from '../micro/AlertInfo';

function NewUser() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [alertInfo, setAlertInfo] = useState({
    show: false,
    error: '',
    variant: 'info',
  });

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(validator.isEmail(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(validator.isStrongPassword(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  const generateRndmPwd = () => {
    const randomPassword = Math.random().toString(36).slice(-8).concat('X@49');
    setPwd(randomPassword);
    setMatchPwd(randomPassword);
    setValidMatch(pwd === matchPwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button would be enabled with JS
    const v1 = validator.isEmail(user);
    const v2 = validator.isStrongPassword(pwd);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }
    try {
      const fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, pwd }),
        credentials: 'include',
      };
      const answer = await fetch(`${AUTH_URL}/register`, fetchOptions);
      const result = await answer.json();
      setSuccess(true);
      // clear all state and controlled inputs
      setUser('');
      setPwd('');
      setMatchPwd('');
      setAlertInfo({
        show: true,
        message: `${result.message}`,
        variant: 'success',
      });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="p-2 my-5 mx-auto text-center" style={{ color: 'whitesmoke' }}>
      {success ? (
        <AlertInfo alertInfo={alertInfo} setAlertInfo={setAlertInfo} />
      ) : (
        <Card
          style={{ color: 'whitesmoke', backgroundColor: 'grey', width: '400px', margin: '0 auto' }}
        >
          <Card.Body>
            <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
              {errMsg}
            </p>
            <h5 className="card-title text-center">Új felhasználó</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Email cím:</Form.Label>
                <Form.Control
                  type="text"
                  className={`d-inline-block form-control form-control-sm ${
                    validName ? 'is-valid' : ''
                  } ${user && !validName ? 'is-invalid' : ''}`}
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <div
                  id="uidnote"
                  className={userFocus && user && !validName ? 'instructions' : 'offscreen'}
                >
                  <Form.Text className="text-muted">
                    <FontAwesomeIcon icon={faInfoCircle} /> 4 - 24 karakter. Betűvel kezdődjön.{' '}
                    <br />
                    Betűk, számok, alsóvonás, kötőjel elfogadott.
                  </Form.Text>
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Jelszó:</Form.Label>

                <Form.Control
                  type="password"
                  className={`d-inline-block form-control form-control-sm ${
                    validPwd ? 'is-valid' : ''
                  } ${pwd && !validPwd ? 'is-invalid' : ''}`}
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <Button variant="outline-info" type="button" onClick={generateRndmPwd}>
                  Jelszó generálás
                </Button>
                <div id="pwdnote" className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
                  <Form.Text className="text-muted ">
                    <FontAwesomeIcon icon={faInfoCircle} /> 8 - 24 karakter. <br /> Tartalmaznia
                    kell nagybetűt, kisbetűt, <br /> számot és legalább egy speciális karaktert.{' '}
                    <br /> Elfogadott spec.karakterek: ! @ # $ %
                  </Form.Text>
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirm_pwd">
                <Form.Label>Jelszó megerősítés:</Form.Label>
                <Form.Control
                  type="password"
                  className={`d-inline-block form-control form-control-sm ${
                    matchPwd && !validMatch ? 'is-invalid' : ''
                  }`}
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <div
                  id="confirmnote"
                  className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> Egyeznie kell az első mezőbe írt
                  jelszóval.
                </div>
              </Form.Group>
              <Button
                variant="outline-success"
                type="submit"
                disabled={!!(!validName || !validPwd || !validMatch)}
              >
                Felhasználó létrehozása
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
export default NewUser;
