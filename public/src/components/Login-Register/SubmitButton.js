import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = React.memo( ( { loading, text } ) => {
    return (
        <div className="text-center mb-3">
            {
                loading
                    ?
                <button
                    type="button"
                    className="btn btn-primary"
                    disabled
                >
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="loading">Loading...</span>
                </button>
                    :
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    { text }
                </button>
            }
        </div>
    );
} );

SubmitButton.propTypes = {
    loading: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default SubmitButton;
