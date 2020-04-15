import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './index.css';
import * as actions from '../../../store/actions';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import ResultItem from '../../molecules/ResultItem';

class Result extends Component {
	componentDidMount() {
		const { questions, history } = this.props;

		if (questions.length === 0) history.push('/');
	};
	
	playAgain = () => {
		const { history, clearQuestions } = this.props;

		clearQuestions();
		history.push('/');
	};

	render() {
		const { questions } = this.props;
		const correctAnswers = questions.filter(question => question.isCorrect).length;

		return (
			<div className="Result">
				<div className="Result__header">
					<Text size="small">You scored</Text>
					<Text size="bigger">{`${correctAnswers} / ${questions.length}`}</Text>
				</div>
				<div className="Result__results">
					<div className="Result__results__wrapper">
						{questions.map(question => (
							<ResultItem
								key={question.id}
								question={question.question}
								isCorrect={question.isCorrect}
								correctAnswer={question.correct_answer}
							/>
						))}
					</div>
				</div>
				<Button onClick={this.playAgain}>play again?</Button>
			</div>
		)
	}
};

Result.propTypes = {
	questions: PropTypes.arrayOf(PropTypes.shape({
		isCorrect: PropTypes.bool,
		question: PropTypes.string
	})),
	clearQuestions: PropTypes.func.isRequired
};

const mapActionsToProps = dispatch => ({
	clearQuestions: () => dispatch(actions.clearQuestions())
});

const mapStateProps = state => ({
	questions: state.questions.questions
});

export default connect(mapStateProps, mapActionsToProps)(withRouter(Result));
