import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button";

function Unauthorized() {
    const navigate = useNavigate();

    // const goBack = () => navigate(-1, { replace: true });
    const goBack = () => navigate('/login');
    
    return (
        <div className="text-center">
            <h1>Unauthorized!</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div>
                <Button variant="primary" type="button" onClick={goBack}>Go Back</Button>
            </div>
        </div>
    )
}

export default Unauthorized
