const fetchAuth = async( endpoint, data ) => {
    const url = process.env.REACT_APP_BASE_URL + endpoint;
        
    const request = await fetch( url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify( data )
    } );

    const response = await request.json();
    return response;
};

export default fetchAuth;
