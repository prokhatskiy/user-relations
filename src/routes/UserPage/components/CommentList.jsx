import React, { PropTypes } from 'react';

import './CommentList.styl';

const CommentList = ({ items }) => (
    <ul className="comments">
        {
            items.map((comment) => (
                <li className="comments__item">
                    <div className="comments__author">
                        {comment.author}
                    </div>
                    <div className="comments__item-body">
                        {comment.text}
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

export default CommentList;
