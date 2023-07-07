import React, { useContext } from 'react';
import { AuthContext } from '../Poviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;

/***
 * steps
 * 1.check user is logged in or not
 * 2.if user is logged in allow them to visit the route 
 * 3.Else redirect the user to the login page 
 * 4.set private route
 * 5.handle loading
 * */ 