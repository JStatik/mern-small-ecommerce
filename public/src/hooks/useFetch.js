import { useEffect, useRef, useState } from 'react';

const useFetch = ( url ) => {
    const isMountedRef = useRef( true );
    const [ state, setState ] = useState( { data: [], loading: true, error: null } );

    useEffect( () => {
        return () => {
            isMountedRef.current = false;
        }
    }, [] )

    useEffect( () => {
        setState( { data: [], loading: true, error: null } );

        const { token } = JSON.parse( localStorage.getItem( 'ueca' ) );

        fetch( url, {
            method: 'GET',
            headers: {
                'x-token': token
            }
        } )
            .then( res => res.json() )
            .then( data => {
                if( !data.ok ) {
                    setState( { data: [], loading: false, error: 'Error en la petición' } );
                } else {
                    const dataProducts = Object.values( data )[ 1 ];

                    isMountedRef.current && setState( { data: dataProducts, loading: false, error: null } );
                }
            } )
            .catch( err => {
                setState( { data: [], loading: false, error: err } );
            } );
    }, [ url ] );

    return state;
};

export default useFetch;
