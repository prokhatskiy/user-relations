import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import users from './users';

const reducers = {
    users,
    form: reduxFormReducer
};

export default combineReducers(reducers);

