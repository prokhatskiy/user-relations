import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CommentForm.styl';

export default class CommentForm extends Component {
    renderMessage() {
        return (
            <div className="comment-form__message">
                For leaving comment you should be registered user.
            </div>
        )
    }
    renderForm() {
        return (
            <form onSubmit={() => {}}>
                <label htmlFor="comment-form">
                    Leave your comment:
                    <textarea name="comment-form" className="comment-form__message" />

                    <button className="btn btn_action comment-form__submit-btn">
                        Submit
                    </button>
                </label>
            </form>
        )
    }
    render() {
        const { auth } = this.props;

        return (
            <div className="comment-form">
                {
                    auth && auth.id
                        ? this.renderForm()
                        : this.renderMessage()
                }
            </div>
        )
    }
}

CommentForm.propTypes = {
    postComment: PropTypes.func,
    userId: PropTypes.string,
    auth: PropTypes.shape({
        id: PropTypes.string
    })
};
