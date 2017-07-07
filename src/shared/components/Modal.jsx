import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import './Modal.styl';

const Modal = ({ children, onClose }) => (
    <section className="modal">
        <div className="modal__content">
            <Button
              onClick={onClose}
              modifiers={['light', 'small']}
              className="modal__close-btn"
            >
                Close
            </Button>

            {children}
        </div>
    </section>
);

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    onClose: PropTypes.func
};

export default Modal;
