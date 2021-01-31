import React from 'react';
import PropTypes from 'prop-types';

const InfoCard = ( { name, price, description } ) => {
    return (
        <>
            <h3>{ name }</h3>

            <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item"><b>Price: </b>{ price }</li>
                <li className="list-group-item"><b>Description: </b>{ description }</li>
            </ul>
        </>
    );
};

InfoCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default InfoCard;
