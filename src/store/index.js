import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

function reduxStore() {
    const store = createStore(
        rootReducer,
        window.devToolsExtension && window.devToolsExtension(),
        applyMiddleware(thunkMiddleware)
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            // We need to require for hot reloading to work properly.
            const nextReducer = require('../reducers');  // eslint-disable-line global-require

            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

export default reduxStore;
