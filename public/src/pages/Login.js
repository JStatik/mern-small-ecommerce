import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import useForm from '../hooks/useForm';
import fetchAuth from '../helpers/fetchAuth';
import isValidLoginFetch from '../helpers/isValidLoginFetch';
import isValidLoginForm from '../helpers/isValidLoginForm';
import login from '../actions/auth/login';
import ErrorForm from '../components/Login-Register/ErrorForm';
import EmailInput from '../components/Login-Register/EmailInput';
import HeaderForm from '../components/Login-Register/HeaderForm';
import PasswordInput from '../components/Login-Register/PasswordInput';
import RedirectLink from '../components/Login-Register/RedirectLink';
import SubmitButton from '../components/Login-Register/SubmitButton';

const Login = () => {
    const { dispatchAuth } = useContext( AuthContext );

    const [ formValues, handleInputChange, reset ] = useForm( { email: '', password: '' } );
    const { email, password } = formValues;

    const [ error, setError ] = useState( null );
    const [ loading, setLoading ] = useState( false );

    const handleSubmit = async( event ) => {
        event.preventDefault();

        setLoading( true );

        const { isValid, errorLogin, email: emailValidator, password: passwordValidator } = isValidLoginForm( email, password );
        setError( errorLogin );

        if( isValid ) {
            const response = await fetchAuth( '/api/auth', { email: emailValidator, password: passwordValidator } );

            const { error: errorFetch, data } = isValidLoginFetch( response );
            setError( errorFetch );

            if( data ) {
                setLoading( false );
                reset();

                dispatchAuth( login( data ) );
                return;
            }        
        }

        setLoading( false );
    };

    return (
        <div className="container animate__animated animate__fadeIn">
            <div className="abs-center">
                <div className="card">
                    <HeaderForm title="Login" />

                    <div className="card-body">
                        <form autoComplete="off" onSubmit={ handleSubmit }>
                            {
                                error && <ErrorForm error={ error } />
                            }

                            <EmailInput
                                email={ email }
                                handleInputChange={ handleInputChange }
                                error={ !error ? '' : error }
                            />

                            <PasswordInput
                                password={ password }
                                handleInputChange={ handleInputChange }
                                error={ !error ? '' : error }
                            />

                            <SubmitButton
                                loading={ loading }
                                text="Ingresar"
                            />

                            <RedirectLink
                                route="/auth/register"
                                text="Create New Account"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
