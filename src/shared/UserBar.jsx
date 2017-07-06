import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import './UserBar.styl';

export default class UserBar extends Component {
    renderLogOut() {
        const { name: { first, last } } =  this.props;

        return (
            <div className="user-bar__username">
                Hi, {first} {last}

                <Button modifiers={['dark']}>
                    Log Out
                </Button>
            </div>
        );
    }

    renderSignIn() {
        return (
            <Button modifiers={['light']}>
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
                        ? this.renderLogOut()
                        : this.renderSignIn()

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
