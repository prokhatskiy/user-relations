import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

const UserPage = () => (
    <section className="user-page">
        <CommentList />
        <CommentForm />
    </section>
);

export default UserPage;
