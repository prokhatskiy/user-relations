import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserList from './UserList';
import TopUsers from './TopUsers';

import './MainPage.styl';

const MainPage = ({ fetchUsers, users }) => (
    <section className="main-page">
        <UserList
            items={users}
            loadMore={fetchUsers}
        />

        <aside className="main-page__sidebar">
            <TopUsers />
        </aside>
    </section>
);

MainPage.propTypes = {
    fetchUsers: PropTypes.func,
    users: PropTypes.array,
};

export default MainPage;

