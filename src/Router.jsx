import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './layout/MainLayout';

import { UserPage } from './routes/UserPage';
import { MainPage } from './routes/MainPage';
import { Message } from './shared';

export const USER_ROUTE = 'user';

export default () => (
    <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path={`/${USER_ROUTE}/:userId`} component={UserPage} />
                <Route path="*" component={() => <Message text="Page Not Found" />} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);
