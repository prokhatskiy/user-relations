import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Button from './Button';
import Modal from './Modal';
import Input from './Input';

const LoginModal = ({ onClose, handleSubmit, submitting, onSubmit, error }) => (
    <Modal onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              name="username"
              component={Input}
              placeholder="username"
              className="user-bar__input"
              required
            />
            <Field
              name="password"
              component={Input}
              type="password"
              placeholder="password"
              className="user-bar__input"
              required
            />
            { error && <div className="modal__error">{error}</div> }
            <Button submit disabled={submitting}>Log In</Button>
        </form>
    </Modal>
);

LoginModal.propTypes = {
    onClose: PropTypes.func,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    error: PropTypes.string,
    submitting: PropTypes.bool
};

export default reduxForm({
    form: 'login-form'
})(LoginModal);
