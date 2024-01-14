import { createContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import {AUTH_URL} from "../constants";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();
    const handleLogout = async () => {
        setAuth({});
        try {
            const fetchOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            }
            await fetch(`${AUTH_URL}/logout`, fetchOptions)
            navigate('/logout')
            // this return is only because the linter
            return null
        } catch (err) {
            // TODO catch error handling
            return null
        } finally {
            // TODO could be different navigate to /logout or /error page
            navigate('/');
        }
    }

    const authMemo = useMemo(
        () => ({ auth, setAuth, handleLogout }),
        [auth, setAuth, handleLogout],
    );

    return (
        <AuthContext.Provider value={authMemo}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;