import React from 'react';
import PropTypes from 'prop-types';

const ImageCard = ( { img, name } ) => {
    return (
        <div className="col-4 p-1">
            <img
                src={ img }
                alt={ name }
                className="img-thumbnail animate__animated animate__zoomIn"
                style={ { height: '590px' } }
            />
        </div>
    );
};

ImageCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default ImageCard;
