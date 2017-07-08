import { usersApi } from '../utils';

export const USERS_FETCHED = 'Users/USERS_FETCHED';
export const FETCH_LIMIT = 200;

export function fetchUsers(page = 0, limit = FETCH_LIMIT) {
    return dispatch => (
        usersApi.get({ page, results: limit }).then(res => (
            dispatch({
                type: USERS_FETCHED,
                payload: {
                    items: res.results,
                    page: res.info.page
                }
            })
        ))
    );
}
