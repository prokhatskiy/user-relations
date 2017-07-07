import { SIGN_IN, SIGN_OUT } from '../actions/auth';

const initialState = {
    user: {},
    signedIn: false
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case SIGN_IN:
        return {
            ...state,
            user: action.payload.user,
            signedIn: true
        };

    case SIGN_OUT:
        return {
            ...state,
            user: {},
            signedIn: false
        };

    default:
        return state;
    }
}
