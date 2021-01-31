import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Loading from '../pages/Loading';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AuthRouter from './AuthRouter';
import HomeRouter from './HomeRouter';

const AppRouter = () => {
    const { auth, verifyJWT } = useContext( AuthContext );
    const { checking, logged } = auth;

    useEffect( () => {
        verifyJWT();
    }, [ verifyJWT ] );

    if( checking ) return <Loading />;

    return (
        <Router>
            <div>
                <Switch>                    
                    <PublicRoute path="/auth" isAuthenticated={ logged } component={ AuthRouter } />
                    <PrivateRoute path="/" isAuthenticated={ logged } component={ HomeRouter } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
