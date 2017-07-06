import React, { PropTypes } from 'react';

import './CommentForm.styl';

const CommentForm = () => (
    <div className="comment-form">
        <form onSubmit={() => {}}>
            <label htmlFor="comment-form">
                Leave your comment:
                <textarea name="comment-form" className="comment-form__message" />

                <button className="btn btn_action comment-form__submit-btn">
                    Submit
                </button>
            </label>
        </form>
    </div>
);

export default CommentForm;
