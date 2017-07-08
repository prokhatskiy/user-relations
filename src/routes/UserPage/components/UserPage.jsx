import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from '../../../shared/components/Message';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

import './UserPage.styl';

export default class UserPage extends Component {
    handleCommentSubmit = ({ comment }) => {
        this.props.addComment(this.props.auth.user.id, this.props.user.id, comment);
    };

    render() {
        const { user, auth, commentsMap, commentsOrder } = this.props;

        const comments = commentsOrder.map(id => commentsMap[id]);

        if (!user) {
            return (
                <Message text="User not found" />
            );
        }

        const userName = `${user.name.first} ${user.name.last}`;

        return (
            <section className="user-page">
                <img src={user.picture.large} alt={userName} className="user-page__img" />

                <ul className="user-page__info">
                    <li className="user-page__info-item"><strong>{userName}</strong></li>
                    <li className="user-page__info-item"><strong>email:</strong> {user.email}</li>
                    <li className="user-page__info-item"><strong>phone:</strong> {user.phone}</li>
                    <li className="user-page__info-item"><strong>username:</strong> {user.login.username}</li>
                    <li className="user-page__info-item"><strong>password:</strong> {user.login.password}</li>
                </ul>

                <CommentList items={comments} />
                <CommentForm onSubmit={this.handleCommentSubmit} showForm={auth.signedIn} />
            </section>
        );
    }
}

UserPage.propTypes = {
    auth: PropTypes.shape({
        user: PropTypes.shape({
            id: PropTypes.string
        }),
        signedIn: PropTypes.bool
    }),
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.shape({
            first: PropTypes.string,
            last: PropTypes.string
        }),
        email: PropTypes.string,
        phone: PropTypes.string,
        login: PropTypes.shape({
            username: PropTypes.string,
            password: PropTypes.string
        })
    }),
    addComment: PropTypes.func,
    commentsOrder: PropTypes.arrayOf(PropTypes.string),
    commentsMap: PropTypes.shape({}),
};

UserPage.defaultProps = {
    commentsOrder: []
};
