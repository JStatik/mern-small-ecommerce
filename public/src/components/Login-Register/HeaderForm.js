import React from 'react';
import PropTypes from 'prop-types';

const HeaderForm = React.memo( ( { title } ) => {
    return (
        <div className="card-header text-center">
            { title }
        </div>
    );
} );

HeaderForm.propTypes = {
    title: PropTypes.string.isRequired
};

export default HeaderForm;
