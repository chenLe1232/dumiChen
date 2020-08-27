
import './button.less';
import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props;
  const classes = classNames('btn',  {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType, 
  }, className );
  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    );
  } else {
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        className={classes}
        disabled={disabled}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...restProps}
      >
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'primary',
  children: '登入',
};

export default Button;
