import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from './ProductsList/ImageCard';
import RedirectCard from './ProductsList/RedirectCard';
import TitleCard from './ProductsList/TitleCard';

const ProductsList = ( { id, name, img } ) => {
    return (
        <div className="col-4 mb-3 animate__animated animate__fadeInLeftBig">
            <div className="card" style={ { height: '210px' } }>
                <div className="row no-gutters">
                    <ImageCard img={ img } name={ name } />

                    <div className="col-md-8">
                        <div className="card-body">
                            <TitleCard title={ name } />

                            <RedirectCard id={ id } />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

ProductsList.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

export default ProductsList;
