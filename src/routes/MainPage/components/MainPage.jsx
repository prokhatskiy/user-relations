import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserList from './UserList';
import TopUsers from './TopUsers';

import './MainPage.styl';

const MainPage = ({ fetchUsers, usersMap, usersOrder, initialPage }) => {
    const users = usersOrder.map(userId => usersMap[userId]);

    return (
        <section className="main-page">
            <UserList
              items={users}
              loadMore={fetchUsers}
              initialPage={initialPage}
            />

            <aside className="main-page__sidebar">
                <TopUsers items={users} />
            </aside>
        </section>
    );
};

MainPage.propTypes = {
    fetchUsers: PropTypes.func,
    usersMap: PropTypes.shape({}),
    usersOrder: PropTypes.arrayOf(PropTypes.string),
    initialPage: PropTypes.number
};

export default MainPage;

