import React, { PropTypes } from 'react';

import './Message.styl';

const Message = ({ text }) => (
    <div className="message">{text}</div>
);

Message.propTypes = {
    text: PropTypes.string.isRequired
};

export default Message;
