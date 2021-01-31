import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import useForm from '../hooks/useForm';
import fetchAuth from '../helpers/fetchAuth';
import isValidRegisterFetch from '../helpers/isValidRegisterFetch';
import isValidRegisterForm from '../helpers/isValidRegisterForm';
import register from '../actions/auth/register';
import ErrorForm from '../components/Login-Register/ErrorForm';
import EmailInput from '../components/Login-Register/EmailInput';
import HeaderForm from '../components/Login-Register/HeaderForm';
import NameInput from '../components/Login-Register/NameInput';
import PasswordInput from '../components/Login-Register/PasswordInput';
import RedirectLink from '../components/Login-Register/RedirectLink';
import SubmitButton from '../components/Login-Register/SubmitButton';

const Register = () => {
    const { dispatchAuth } = useContext( AuthContext );

    const [ formValues, handleInputChange, reset ] = useForm( { name: '', email: '', password: '' } );
    const { name, email, password } = formValues;

    const [ error, setError ] = useState( null );
    const [ loading, setLoading ] = useState( false );

    const handleSubmit = async( event ) => {
        event.preventDefault();

        setLoading( true );

        const { isValid, errorRegister, name: nameValidator, email: emailValidator, password: passwordValidator } = isValidRegisterForm( name, email, password );
        setError( errorRegister );

        if( isValid ) {
            const response = await fetchAuth( '/api/auth/register', { name: nameValidator, email: emailValidator, password: passwordValidator } );

            const { error: errorFetch, data } = isValidRegisterFetch( response );
            setError( errorFetch );

            if( data ) {
                setLoading( false );
                reset();

                dispatchAuth( register( data ) );
                return;             
            }
        }

        setLoading( false );
    };

    return (
        <div className="container animate__animated animate__fadeIn">
            <div className="abs-center">
                <div className="card">
                    <HeaderForm title="Register" />

                    <div className="card-body">
                        <form autoComplete="off" onSubmit={ handleSubmit }>
                            {
                                error && <ErrorForm error={ error } />
                            }

                            <NameInput
                                name={ name }
                                handleInputChange={ handleInputChange }
                                error={ !error ? '' : error }
                            />

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
                                text="Registrarse"
                            />

                            <RedirectLink
                                route="/auth/login"
                                text="Already registered?"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
