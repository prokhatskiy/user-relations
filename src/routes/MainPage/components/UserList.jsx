import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { USER_ROUTE } from '../../../Router';

import './UserList.styl';

export const USER_SHAPE = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.string
    }),
    picture: PropTypes.shape({
        large: PropTypes.string
    })
});

export default class UserList extends Component{
    render() {
        return (
            <ul className="user-list">
                {
                    this.props.items.map(item => {
                        const { id, picture, name } = item;
                        const userName = `${name.first} ${name.last}`;

                        return (
                            <li className="user-list__item">
                                <Link to={`/${USER_ROUTE}/${id}`} className="user-list__link">
                                    <img
                                      className="user-list__img"
                                      src={picture.large}
                                      alt={userName}
                                    />

                                    {userName}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        )
    }
};

UserList.propTypes = {
    items: PropTypes.arrayOf(USER_SHAPE)
};

UserList.defaultProps = {
    items: []
};
