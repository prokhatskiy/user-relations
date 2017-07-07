import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { USER_ROUTE } from '../../../Router';

import './UserList.styl';

export const USER_SHAPE = PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.string
    }),
    picture: PropTypes.shape({
        large: PropTypes.string
    })
});

export default class UserList extends Component{
    componentDidMount() {
        if (this.props.initialPage === 0) {
            this.props.loadMore();
        }
    }

    render() {
        const { items, loadMore, initialPage } = this.props;

        return (
            <InfiniteScroll
              pageStart={initialPage}
              loadMore={loadMore}
              hasMore
            >
                <ul className="user-list">
                    {
                        items.map(item => {
                            const { id, picture, name } = item;
                            const userName = `${name.first} ${name.last}`;

                            return (
                                <li className="user-list__item" key={item.id}>
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
            </InfiniteScroll>
        )
    }
};

UserList.propTypes = {
    items: PropTypes.arrayOf(USER_SHAPE),
    initialPage: PropTypes.number,
    loadMore: PropTypes.func
};

UserList.defaultProps = {
    items: []
};
