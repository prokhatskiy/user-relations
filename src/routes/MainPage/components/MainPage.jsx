import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserList from './UserList';
import TopUsers from './TopUsers';

import './MainPage.styl';

const MainPage = ({ fetchUsers, users, initialPage }) => (
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

MainPage.propTypes = {
    fetchUsers: PropTypes.func,
    users: PropTypes.array,
    initialPage: PropTypes.number
};

export default MainPage;

