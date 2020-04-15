import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import Text from '../../atoms/Text';
import ImgSvg from '../../atoms/ImgSvg';

const ResultItem = ({ question, isCorrect, correctAnswer }) => (
	<div className="ResultItem" data-test="ResultItem">
		<div className={`ResultItem__icon ResultItem__icon--${isCorrect ? 'success' : 'error'}`}>
			<ImgSvg name={isCorrect ? 'check' : 'cross'} />
		</div>
		<div className="ResultItem__content">
			<Text size="smallest">{question}</Text>
			{!isCorrect && <Text size="smallest">{`The correct answer was ${correctAnswer}`}</Text>}
		</div>
	</div>
);

ResultItem.propTypes = {
	question: PropTypes.string.isRequired,
	isCorrect: PropTypes.bool.isRequired,
	correctAnswer: PropTypes.string.isRequired
};

export default ResultItem;
