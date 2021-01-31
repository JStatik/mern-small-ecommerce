import types from '../../types/types';

const register = ( data ) => {
    const { token, user } = data;
    
    localStorage.setItem( 'ueca', JSON.stringify( { token } ) );

    return {
        type: types.register,
        payload: user
    };
};

export default register;
