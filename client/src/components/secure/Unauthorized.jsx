import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Unauthorized() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1, { replace: true });
  // const goBack = () => navigate('/login');

  return (
    <div className="text-center" style={{ color: 'whitesmoke' }}>
      <h1>Hitelesítési hiba!</h1>
      <br />
      <p>Jelenleg nincs jogosultságod a kért lap megtekintéséhez.</p>
      <div>
        <Button variant="primary" type="button" onClick={goBack}>
          Vissza
        </Button>
      </div>
    </div>
  );
}

export default Unauthorized;
