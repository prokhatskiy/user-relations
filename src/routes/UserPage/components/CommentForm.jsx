import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Input } from '../../../shared';

import './CommentForm.styl';

class CommentForm extends Component {
    renderMessage() {
        return (
            <div className="comment-form__message">
                For leaving comment you should be registered user.
            </div>
        );
    }

    renderForm() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                <label htmlFor="comment-form">
                    <Field
                      name="comment"
                      component={Input}
                      placeholder="Leave your comment here"
                      className="comment-form__message"
                      textarea
                      required
                    />

                    <Button
                      submit
                      modifiers={['light']}
                      className="comment-form__submit-btn"
                    >
                        Submit
                    </Button>
                </label>
            </form>
        );
    }
    render() {
        const { showForm } = this.props;

        return (
            <div className="comment-form">
                {
                    showForm
                        ? this.renderForm()
                        : this.renderMessage()
                }
            </div>
        );
    }
}

CommentForm.propTypes = {
    onSubmit: PropTypes.func,
    handleSubmit: PropTypes.func,
    showForm: PropTypes.bool
};

export default reduxForm({
    form: 'comment-form'
})(CommentForm);
