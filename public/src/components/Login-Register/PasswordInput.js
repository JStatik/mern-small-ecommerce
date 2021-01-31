import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PasswordInput = ( { password, handleInputChange, error } ) => {
    const [ isInvalid, setIsInvalid ] = useState( false );

    useEffect( () => {
        if( error === 'Los datos ingresados no son válidos.' || error === 'Ingrese un password válido. Al menos 6 caracteres y alfanúmerico.' ) {
            setIsInvalid( true );
        } else {
            setIsInvalid( false );
        }
    }, [ error ] );

    return (
        <div className="form-group">
            <input
                type="password"
                name="password"
                className={ `form-control ${ isInvalid && 'is-invalid' }` }
                placeholder="Contraseña"
                value={ password }
                onChange={ handleInputChange }
            />
        </div>
    );
};

PasswordInput.propTypes = {
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};

export default PasswordInput;
