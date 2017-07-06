import React from 'react';
import PropTypes from 'prop-types';

import { UserBar } from '../shared'

import './MainLayout.styl';

const MainLayout = ({ children }) => (
    <section className="page">
        <header className="page__header">
            <UserBar />
        </header>

        {children}
    </section>
);

MainLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default MainLayout;

