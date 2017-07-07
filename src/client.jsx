import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import AppRouter from './Router';

import configureStore from './store';

const store = configureStore();

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./Router', () => {
        const NextRouter = require('./Router').default; // eslint-disable-line global-require

        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <NextRouter />
                </Provider>
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
