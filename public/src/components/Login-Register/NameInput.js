import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const NameInput = ( { name, handleInputChange, error } ) => {
    const [ isInvalid, setIsInvalid ] = useState( false );

    useEffect( () => {
        if( error === 'Ingrese un nombre válido.' ) {
            setIsInvalid( true );
        } else {
            setIsInvalid( false );
        }
    }, [ error ] );

    return (
        <div className="form-group">
            <input
                type="text"
                name="name"
                className={ `form-control ${ isInvalid && 'is-invalid' }` }
                placeholder="Nombre"
                value={ name }
                onChange={ handleInputChange }
            />
        </div>
    );
};

NameInput.propTypes = {
    name: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};

export default NameInput;
