import React  from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Button.styl';

const Button = ({ children, submit, modifiers, ...props }) => (
    <button
      type={submit ? 'submit': 'button'}
      className={cn('btn', modifiers.map(mod => `btn_${mod}`))}
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
    submit: PropTypes.bool
};

export default Button;
