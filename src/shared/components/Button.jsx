import React  from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Button.styl';

const Button = ({ children, submit, modifiers, className, ...props }) => (
    <button
      type={submit ? 'submit': 'button'}
      className={cn('btn', className, modifiers.map(mod => `btn_${mod}`))}
      {...props}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    modifiers: PropTypes.arrayOf(PropTypes.string),
    submit: PropTypes.bool,
    className: PropTypes.string
};

Button.defaultProps = {
    modifiers: []
};

export default Button;
