import types from '../types/types';

const authReducer = ( state, action ) => {
    switch( action.type ) {
        case types.verify:
            return {
                ...state,
                checking: false
            };

        case types.login:
            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.name,
                logged: true
            };

        case types.logout:
            return {
                ...state,
                uid: null,
                name: null,
                logged: false
            };

        case types.register:
            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.name,
                logged: true
            };

        default:
            return state;
    }
};

export default authReducer;
