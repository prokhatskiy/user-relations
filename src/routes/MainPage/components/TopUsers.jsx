import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { getTopUsers } from '../../../utils';

import { USER_ROUTE } from '../../../Router';
import { USER_SHAPE } from './UserList';

import './TopUsers.styl';

export const PAIR_QTY = 5;

export default class TopUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pairs: getTopUsers(props.items, PAIR_QTY)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items !== this.props.items) {
            this.setState({
                pairs: getTopUsers(nextProps.items, PAIR_QTY)
            });
        }
    }
    render() {
        const { pairs } = this.state;

        return (
            <ul className="top-users">
                <li className="top-users__title">
                    Most Likely Couples:
                </li>
                {
                    pairs.map(pair => (
                        <li className="top-users__item" key={pair.male.id + pair.female.id}>
                            <Link to={`/${USER_ROUTE}/${pair.male.id}`} className="top-users__link">
                                <img
                                  src={pair.male.picture.large}
                                  className="top-users__img"
                                />
                                <span className="top-users__name">{`${pair.male.name.first} ${pair.male.name.last}`}</span>
                            </Link>
                            <Link to={`/${USER_ROUTE}/${pair.female.id}`} className="top-users__link">
                                <img src={pair.female.picture.large} className="top-users__img" />
                                <span className="top-users__name">{`${pair.female.name.first} ${pair.female.name.last}`}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

TopUsers.propTypes = {
    items: PropTypes.arrayOf(USER_SHAPE)
};

TopUsers.defaultProps = {
    items: []
};
