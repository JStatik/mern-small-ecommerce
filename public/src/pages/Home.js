import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import useFetch from '../hooks/useFetch';
import logout from '../actions/auth/logout';
import LoadingHome from '../components/General/Loading/LoadingHome';
import ProductsList from '../components/Home/ProductsList';

const Home = () => {
    const { dispatchAuth } = useContext( AuthContext );
    const { data: products, loading, error } = useFetch( `${ process.env.REACT_APP_BASE_URL }/api/home` );

    if( error ) {
        dispatchAuth( logout() );
    }

    return (
        <div className="container mt-5 products-list" style={ { flexGrow: 1 } }>
            {
                loading
                    ?
                <LoadingHome />
                    :
                <div className="row">
                    {
                        products.map( ( { id, name, img} ) => (
                            <ProductsList key={ id } id={ id } name={ name } img={ img } />
                        ) ) 
                    }
                </div>  
            }
        </div>
    );
};

export default Home;
