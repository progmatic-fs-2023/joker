import PropTypes from 'prop-types';
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function RequireAuth({ allowedRoles }) {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        allowedRoles?.includes(auth?.role)
            ? <Outlet />
            : <Navigate to="/unauthorized" state={{ from: location }} replace />
    );
}

RequireAuth.propTypes = {
    allowedRoles: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired
}

export default RequireAuth;