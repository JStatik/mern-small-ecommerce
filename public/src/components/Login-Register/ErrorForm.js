import React from 'react';
import PropTypes from 'prop-types';
import './formStyles.css';

const ErrorForm = React.memo( ( { error } ) => {
    return (
        <p className="alert-error text-center">
            { error }
        </p>
    );
} );

ErrorForm.propTypes = {
    error: PropTypes.string.isRequired
};

export default ErrorForm;
