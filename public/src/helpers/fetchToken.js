const fetchToken = async( endpoint, method, token ) => {
    const url = process.env.REACT_APP_BASE_URL + endpoint;

    const request = await fetch( url, {
        method: method,
        headers: {
            'x-token': token
        }
    } );

    const response = await request.json();
    return response;
};

export default fetchToken;
