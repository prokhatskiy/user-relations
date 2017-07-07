import { connect } from 'react-redux';
import UserPage from '../components/UserPage';

import { addComment } from '../../../actions/comments';

const mapStateToProps = (
    {
        comments,
        users: { items },
        auth
    },
    {
        match: {
            params: {
                userId
            }
        }
    }
) => ({
    user: items[userId],
    comments: comments.recipients[userId] &&
        comments.recipients[userId].map(commentId => comments.items[commentId]),
    auth
});

const mapDispatchToProps = dispatch => ({
    addComment(...args) {
        dispatch(addComment(...args));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
