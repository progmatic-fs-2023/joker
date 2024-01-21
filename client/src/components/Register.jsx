import { useRef, useState, useEffect } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import Button from 'react-bootstrap/Button';
import { AUTH_URL } from '../constants';

function Register() {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

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
      await answer.json();
      setSuccess(true);
      // clear all state and controlled inputs
      setUser('');
      setPwd('');
      setMatchPwd('');
      navigate('/login');
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
    <div
      className="p-2 my-5 mx-auto text-center"
      style={{ border: 'solid 1px lightblue', borderRadius: '12px', width: '40%' }}
    >
      {success ? (
        <div>
          <h1>Sikeres regisztráció</h1>
          <p>
            <Link to="/login">Bejelentkezés</Link>
          </p>
        </div>
      ) : (
        <div>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>
          <h5>Regisztráció</h5>
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Email cím:
                <input
                  type="text"
                  id="username"
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
              </label>
              <div
                id="uidnote"
                className={userFocus && user && !validName ? 'instructions' : 'offscreen'}
              >
                <FontAwesomeIcon icon={faInfoCircle} /> 4 - 24 karakter. Betűvel kezdődjön. <br />
                Betűk, számok, alsóvonás, kötőjel elfogadott.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Jelszó:
                <input
                  type="password"
                  id="password"
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
              </label>
              <div id="pwdnote" className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
                <FontAwesomeIcon icon={faInfoCircle} /> 8 - 24 karakter. <br /> Tartalmaznia kell
                nagybetűt, kisbetűt, <br /> számot és legalább egy speciális karaktert. <br />{' '}
                Elfogadott spec.karakterek: ! @ # $ %
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirm_pwd" className="form-label">
                Jelszó megerősítés:
                <input
                  type="password"
                  id="confirm_pwd"
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
              </label>
              <div
                id="confirmnote"
                className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}
              >
                <FontAwesomeIcon icon={faInfoCircle} /> Egyeznie kell az első mezőbe írt jelszóval.
              </div>
            </div>
            <Button
              type="submit"
              className="btn btn-success"
              disabled={!!(!validName || !validPwd || !validMatch)}
            >
              Regisztráció
            </Button>
          </form>
          <p className="text-left mt-3">
            Már van fiókod?
            <br />
            <span className="line">
              <Link to="/login">Lépj be</Link>
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
export default Register;
