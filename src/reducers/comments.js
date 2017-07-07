import md5 from 'md5';
import { ADD_COMMENT } from '../actions/comments';

const initialState = {
    items: {},
    recipients: {}
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case ADD_COMMENT: {
        const { authorId, targetId, body } = action.payload;
        const newComment = generateCommentEntry(authorId, targetId, body);

        return {
            ...state,
            items: {
                ...state.items,
                [newComment.id]: newComment
            },
            recipients: {
                ...state.recipients,
                [targetId]: state.recipients[targetId]
                    ? [].concat(state.recipients[targetId], [newComment.id])
                    : [newComment.id]
            }
        };
    }
    default:
        return state;
    }
}

function generateCommentEntry(authorId, targetId, body) {
    return {
        id: md5(authorId + targetId + new Date().getTime()),
        authorId,
        targetId,
        body,
    };
}
