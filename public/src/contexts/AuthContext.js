import React, { createContext, useCallback, useReducer } from 'react';
import authReducer from '../reducers/authReducer';
import fetchToken from '../helpers/fetchToken';
import login from '../actions/auth/login';
import logout from '../actions/auth/logout';
import verify from '../actions/auth/verify';

const AuthContext = createContext();

const initialState = {
    uid: null,
    name: null,
    logged: false,
    checking: true
};

const AuthProvider = ( { children } ) => {
    const [ auth, dispatchAuth ] = useReducer( authReducer, initialState );

    const verifyJWT = useCallback( async() => {
        const user = JSON.parse( localStorage.getItem( 'ueca' ) ) || null;

        if( !user ) {
            dispatchAuth( logout() );
            dispatchAuth( verify() );

            return;
        };
    
        if( !user.token ) {
            dispatchAuth( logout() );
            dispatchAuth( verify() );

            return;
        }
    
        const response = await fetchToken( '/api/auth/renew', 'GET', user.token );

        if( !response.ok ) {
            dispatchAuth( logout() );
            dispatchAuth( verify() );
        } else {
            const { token, user } = response;

            dispatchAuth( login( { token, user } ) );
            dispatchAuth( verify() );
        }
    }, [] );

    return (
        <AuthContext.Provider value={ { auth, dispatchAuth, verifyJWT } }>
            { children }
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
    AuthProvider
};
