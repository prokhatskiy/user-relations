import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form'

import Button from './Button';
import LoginModal from './LoginModal';

import './UserBar.styl';

export default class UserBar extends Component {
    state = {
        isModalOpen: false
    };

    handleOpenModal = () => {
        this.setState({
            isModalOpen: true
        });
    };

    handleCloseModal = () => {
        this.setState({
            isModalOpen: false
        });
    };

    handleSubmitLoginForm = ({ username, password }) => {
        const { onSignIn, users } = this.props;

        return onSignIn(username, password, users)
            .then(() => {
                this.handleCloseModal();
            })
            .catch((err) => {
                throw new SubmissionError({
                    _error: err
                });
            });
    };

    renderLogOutBtn() {
        const { auth: { user }, onSignOut } = this.props;

        return (
            <div className="user-bar__username">
                Hi, {user.name.first} {user.name.last}

                <Button modifiers={['dark']} onClick={onSignOut}>
                    Log Out
                </Button>
            </div>
        );
    }


    renderLogInBtn() {
        return (
            <Button modifiers={['light']} onClick={this.handleOpenModal}>
                Log In
            </Button>
        );
    }

    render() {
        const { auth: { signedIn } } = this.props;

        return (
            <div className="user-bar">
                {
                    signedIn
                        ? this.renderLogOutBtn()
                        : this.renderLogInBtn()

                }

                {
                    this.state.isModalOpen &&
                    <LoginModal
                      onClose={this.handleCloseModal}
                      onSubmit={this.handleSubmitLoginForm}
                    />
                }
            </div>
        );
    }
}

UserBar.propTypes = {
    auth: PropTypes.shape({
        user: PropTypes.shape({
            name: PropTypes.shape({
                first: PropTypes.string,
                last: PropTypes.string
            })
        }),
        signedIn: PropTypes.bool
    }),
    users: PropTypes.arrayOf(PropTypes.shape({})),
    onSignIn: PropTypes.func,
    onSignOut: PropTypes.func,
};
