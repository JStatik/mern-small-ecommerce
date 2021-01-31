import React from 'react';
import PropTypes from 'prop-types';

const ImageCard = ( { img, name } ) => {
    return (
        <div className="col-md-4">
            <img
                src={ img }
                alt={ name }
                className="card-img"
                style={ { height: '205px' } }
            />
        </div>
    );
};

ImageCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default ImageCard;
