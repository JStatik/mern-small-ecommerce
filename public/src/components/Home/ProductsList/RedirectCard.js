import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RedirectCard = ( { id } ) => {
    return (
        <div className="text-center">
            <Link to={ `/product/${ id }` }>Ver Detalle...</Link>
        </div>
    );
};

RedirectCard.propTypes = {
    id: PropTypes.string.isRequired
};

export default RedirectCard;
