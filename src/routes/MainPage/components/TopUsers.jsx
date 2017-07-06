import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { USER_ROUTE } from '../../../Router';
import { USER_SHAPE } from './UserList';

import './TopUsers.styl';

const TopUsers = ({ pairs }) => (
    <ul className="top-users">
        {
            pairs.map(pair => (
                <li className="top-users__item">
                    <Link to={`/${USER_ROUTE}/${pair.first.id}`} className="top-users__link">
                        <img src={pair.first.picture.large} className="top-users__img" />
                        <span className="top-users__name">{`${pair.first.name.first} ${pair.first.name.last}`}</span>
                    </Link> -
                    <Link to={`/${USER_ROUTE}/${pair.second.id}`} className="top-users__link">
                        <img src={pair.second.picture.large} className="top-users__img" />
                        <span className="top-users__name">{`${pair.second.name.first} ${pair.second.name.last}`}</span>
                    </Link>
                </li>
            ))
        }
    </ul>
);

TopUsers.propTypes = {
    pairs: PropTypes.arrayOf(PropTypes.shape({
       first: USER_SHAPE,
       second: USER_SHAPE
    }))
};

TopUsers.defaultProps = {
    pairs: []
};

export default TopUsers;
