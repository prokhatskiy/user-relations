import React, { PropTypes } from 'react';
import cn from 'classnames';

import './Input.styl';

const Input = ({ textarea, className, ...props }) => {
    // NODE: quick fix for redux-form supporting
    const { input, meta, ...restProps } = props; // eslint-disable-line

    if (textarea) {
        return (
            <textarea className={cn('input input_textarea', className)} {...restProps} {...input} />
        );
    }

    return (
        <input type="text" className={cn('input', className)} {...restProps} {...input} />
    );
};

Input.propTypes = {
    textarea: PropTypes.bool,
    className: PropTypes.string,
    input: PropTypes.shape({})
};

Input.defaultProps = {
    input: {}
};

export default Input;
