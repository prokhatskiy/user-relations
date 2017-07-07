import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import users from './users';
import auth from './auth'

const reducers = {
    users,
    auth,
    form: reduxFormReducer
};

export default combineReducers(reducers);

