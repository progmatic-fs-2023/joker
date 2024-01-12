import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UsersPage from '../pages/UsersPage';

function Login() {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="pl. user@mail.hu" name='email' required/>
                <Form.Text className="text-muted">
                    Az email címedet sosem osztjuk meg.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Jelszó:</Form.Label>
                <Form.Control type="password" placeholder="Írd be a jelszavad"  name='password' required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Jegyezzen meg ebben a böngészőben" />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
                Bejelentkezés
            </Button>
        </Form>
    );
}

export default Login;