import React from 'react';
import PropTypes from 'prop-types';

import Message from '../../../shared/Message'

import CommentList from './CommentList';
import CommentForm from './CommentForm';

const UserPage = ({ usersMap, match: { params: { userId } }}) => {
    const user = usersMap[userId];

    if (!user) {
        return <Message text="User not found" />
    }

    const userName = `${user.name.first} ${user.name.last}`;

    return (
        <section className="user-page">
            <img src={user.picture.large} alt={userName} className="user-page__img" />

            <ul className="user-page__info">
                <li className="user-page__info-item"><strong>{userName}</strong></li>
                <li className="user-page__info-item"><strong>email:</strong> {user.email}</li>
                <li className="user-page__info-item"><strong>phone:</strong> {user.phone}</li>
            </ul>

            <CommentList />
            <CommentForm />
        </section>
    )
};

UserPage.propTypes = {
    usersMap: PropTypes.shape({}),
    match: PropTypes.shape({
        params: PropTypes.shape({
            userId: PropTypes.string
        })
    })
};

export default UserPage;
