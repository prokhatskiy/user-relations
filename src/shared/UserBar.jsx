import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Modal from './Modal';

import './UserBar.styl';

export default class UserBar extends Component {
    state = {
        isModalOpen: false
    };

    handleOpenModal = () => {
        this.setState({
            isModalOpen: true
        })
    };

    handleCloseModal = () => {
        this.setState({
            isModalOpen: false
        })
    };

    handleLogOut = () => {

    };

    renderLogOut() {
        const { name: { first, last } } =  this.props;

        return (
            <div className="user-bar__username">
                Hi, {first} {last}

                <Button modifiers={['dark']} onClick={this.handleLogOut}>
                    Log Out
                </Button>
            </div>
        );
    }

    renderSignIn() {
        return (
            <Button modifiers={['light']} onClick={this.handleOpenModal}>
                Log In
            </Button>
        );
    }

    renderModal() {
        return (
            <Modal onClose={this.handleCloseModal}>
                Hello World
            </Modal>
        );
    }

    render() {
        const { user } = this.props;

        return (
            <div className="user-bar">
                {
                    user
                        ? this.renderLogOut()
                        : this.renderSignIn()

                }

                {
                    this.state.isModalOpen && this.renderModal()
                }
            </div>
        )
    }
}

UserBar.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string,
            last: PropTypes.string
        })
    })
};
