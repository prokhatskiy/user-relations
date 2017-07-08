import React, { PropTypes } from 'react';

import './CommentList.styl';

const CommentList = ({ items }) => (
    <ul className="comments">
        {
            items.length > 0 &&
            <li className="comments__title">
                Comments:
            </li>
        }
        {
            items.map(comment => (
                <li className="comments__item" key={comment.id}>
                    {comment.body}
                </li>
            ))
        }
    </ul>
);

CommentList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        text: PropTypes.string
    }))
};

CommentList.defaultProps = {
    items: []
};

export default CommentList;
