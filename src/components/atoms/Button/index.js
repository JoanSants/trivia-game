import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Button = ({
	children,
	onClick,
	fullWidth,
	disabled
}) => {
	const classes = ['Button'];
	if (fullWidth) classes.push('Button--full');
	if (disabled) classes.push('Button--disabled');

	return (
		<button
			className={classes.join(' ')}
			onClick={disabled ? () => {} : onClick}
			data-test="Button"
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	fullWidth: PropTypes.bool,
	disabled: PropTypes.bool
};

Button.defaultProps = {
	fullWidth: false,
	disabled: false
};

export default Button;
