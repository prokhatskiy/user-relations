import React, { Component }  from 'react';
import PropTypes from 'prop-types';

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

    renderLogOutBtn() {
        const { name: { first, last } } = this.props.user;

        return (
            <div className="user-bar__username">
                Hi, {first} {last}

                <Button modifiers={['dark']} onClick={this.handleLogOut}>
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
        const { user } = this.props;

        return (
            <div className="user-bar">
                {
                    user
                        ? this.renderLogOutBtn()
                        : this.renderLogInBtn()

                }

                {
                    this.state.isModalOpen &&
                    <LoginModal
                      onClose={this.handleCloseModal}
                      onSubmit={(values) => { console.log(values); }}
                    />
                }
            </div>
        );
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
