import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RedirectLink = React.memo( ( { route, text } ) => {
    return (
        <div className="text-center">
            <Link to={ route }>{ text }</Link>
        </div>
    );
} );

RedirectLink.propTypes = {
    route: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default RedirectLink;
