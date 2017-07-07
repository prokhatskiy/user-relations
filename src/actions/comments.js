export const ADD_COMMENT = 'Comments/ADD_COMMENT';

export function addComment(authorId, targetId, body) {
    return dispatch => (
        dispatch({
            type: ADD_COMMENT,
            payload: {
                authorId,
                targetId,
                body
            }
        })
    );
}
