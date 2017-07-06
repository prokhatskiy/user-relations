import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class UserInfo {
    render() {
        return (
          <div className="user-info">
            <CommentList />
            <CommentForm />
          </div>
        );
    }
}

UserInfo.propTypes = {

};
