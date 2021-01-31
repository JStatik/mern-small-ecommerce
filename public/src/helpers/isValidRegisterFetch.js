const isValidRegisterFetch = ( response ) => {
    if( response.errors ) {
        const { errors } = response;
        const firstError = Object.values( errors )[ 0 ].msg;

        return {
            error: firstError,
            data: null
        };
    }

    if( !response.ok && !response.errors ) {
        const { msg: error } = response;

        return {
            error: error,
            data: null
        };
    }

    return {
        error: null,
        data: {
            token: response.token,
            user: response.user
        }
    };
};

export default isValidRegisterFetch;
