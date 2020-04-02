import React from 'react';
import PropTypes from 'prop-types';

import './index.sass';

const Text = ({ children, size }) => (
	<p className={`Text Text--${size}`} data-test="Text">
		{children}
	</p>
);

Text.propTypes ={
	size: PropTypes.oneOf(['small', 'medium', 'bigger', 'big', 'biggest'])
};


export default Text;
