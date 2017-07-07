import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import users from './users';
import auth from './auth';
import comments from './comments';

const reducers = {
    users,
    auth,
    comments,
    form: reduxFormReducer
};

export default combineReducers(reducers);

