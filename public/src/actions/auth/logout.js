import types from '../../types/types';

const logout = () => {
    localStorage.removeItem( 'ueca' );

    return {
        type: types.logout
    };
};

export default logout;
