import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Button = ({ children, onClick, fullWidth }) => (
	<button 
		className={`Button ${fullWidth ? 'Button--full' : ''}`}
		onClick={onClick}
		data-test="Button"
	>
		{children}
	</button>
);

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	fullWidth: PropTypes.bool
};

Button.defaultProps = {
	fullWidth: false
};

export default Button;
