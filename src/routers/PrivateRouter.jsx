import React, { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <Spinner animation="border" variant="primary" />
     }

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRouter;


/**
 * -----------------
 *      STEPS
 * -----------------
 * 1. check user is loged in or not
 * 2. if user loged in then allow then ot visite the route
 * 3. else redirect the user to the login page
 * 4. set up the provate route
 * 5. handle loading
 * */ 