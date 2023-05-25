import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;