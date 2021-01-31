import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ButtonsCard = () => {
    const history = useHistory();
    const [ buy, setBuy ] = useState( false );

    const handleReturn = () => {
        history.push( '/' );
    };

    const handleBuy = () => {
        setBuy( true );
    };

    return (
        <div className="row text-center">
            <div className="col-6 mb-2">
                <button className="btn btn-outline-info" onClick={ handleReturn }>Return</button>
            </div>

            <div className="col-6 mb-2">
                <button className="btn btn-outline-success" onClick={ handleBuy }>Comprar</button>
            </div>

            {
                buy
                    &&
                <div className="col-12">
                    <p className="text-success">
                        Gracias por su compra.
                    </p>
                </div>
            }
        </div>
    );
};

export default ButtonsCard;
