import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const EmailInput = ( { email, handleInputChange, error } ) => {
    const [ isInvalid, setIsInvalid ] = useState( false );

    useEffect( () => {
        if( error === 'Los datos ingresados no son válidos.' || error === 'Ingrese un email válido.' ) {
            setIsInvalid( true );
        } else {
            setIsInvalid( false );
        }
    }, [ error ] );

    return (
        <div className="form-group">
            <input
                type="text"
                name="email"
                className={ `form-control ${ isInvalid && 'is-invalid' }` }
                placeholder="Email"
                value={ email }
                onChange={ handleInputChange }
            />
        </div>
    );
};

EmailInput.propTypes = {
    email: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};

export default EmailInput;
