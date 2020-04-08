import React from 'react';

import './index.css';

const Card = ({ children }) => (
	<div className="Card" data-test="Card">
		{children}
	</div>
);

export default Card;
