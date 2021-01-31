import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingHome from '../components/General/Loading/LoadingHome';
import ButtonsCard from '../components/SingleProduct/ButtonsCard';
import ImageCard from '../components/SingleProduct/ImageCard';
import InfoCard from '../components/SingleProduct/InfoCard';

const SingleProduct = () => {
    const { idProduct } = useParams();
    const { data: product, loading, error } = useFetch( `${ process.env.REACT_APP_BASE_URL }/api/home/${ idProduct }` );
    const { name, img, price, description } = product;

    if( error ) return <Redirect to="/" />;

    return (
        <div style={ { flexGrow: 1 } }>
            {
                loading
                    ?
                <LoadingHome />
                    :
                <div className="container card mt-5" style={ { height: '600px' } }>
                    <div className="row">
                        <ImageCard img={ img } name={ name } />

                        <div className="col-8 animate__animated animate__fadeIn">
                            <InfoCard
                                name={ name }
                                price={ price }
                                description={ description }
                            />

                            <ButtonsCard />
                        </div>
                    </div>    
                </div>
            }
        </div>
    );
};

export default SingleProduct;
