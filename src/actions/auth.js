import { syntheticAuth } from '../utils';

export const SIGN_IN = 'Auth/SIGN_IN';
export const SIGN_OUT = 'Auth/SIGN_OUT';

export function signIn(username, password, users) {
    return dispatch => (
        syntheticAuth(username, password, users).then(user => (
            dispatch({
                type: SIGN_IN,
                payload: {
                    user
                }
            })
        ))
    );
}

export function signOut() {
    return dispatch => (
        dispatch({
            type: SIGN_OUT
        })
    );
}
