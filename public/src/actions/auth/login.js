import types from '../../types/types';

const login = ( data ) => {
    const { token, user } = data;

    localStorage.setItem( 'ueca', JSON.stringify( { token } ) );

    return {
        type: types.login,
        payload: user
    }
};

export default login;
