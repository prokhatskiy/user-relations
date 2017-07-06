import React from 'react';

import UserList from './UserList';
import TopUsers from './TopUsers';

import './MainPage.styl';

const MainPage = () => (
    <section className="main-page">
        <UserList />

        <aside className="main-page__sidebar">
            <TopUsers />
        </aside>
    </section>
);

export default MainPage;
