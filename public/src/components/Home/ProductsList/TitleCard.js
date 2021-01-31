import React from 'react';
import PropTypes from 'prop-types';

const TitleCard = ( { title } ) => {
    return (
        <h5 className="card-title">{ title }</h5>
    );
};

TitleCard.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitleCard;
