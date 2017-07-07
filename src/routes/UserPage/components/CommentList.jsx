import React, { PropTypes } from 'react';

import './CommentList.styl';

const CommentList = ({ items }) => (
    <ul className="comments">
        {
            items.map(comment => (
                <li className="comments__item" key={comment.id}>
                    <div className="comments__item-body">
                        {comment.body}
                    </div>
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
