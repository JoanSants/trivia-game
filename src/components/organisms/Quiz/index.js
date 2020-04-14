import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './index.css';
import * as actions from '../../../store/actions';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import Spinner from '../../atoms/Spinner';

class Quiz extends Component {
	componentDidMount () {
		const {
			fetchQuestions,
			questions,
			startedGame,
			history
		} = this.props;

		if (!startedGame) history.push('/');
		if (questions.length === 0 && startedGame) fetchQuestions({});
	}

	answerQuestion = (answer) => {
		const {
			updateQuestion,
			currentQuestion,
			questions,
			history
		} = this.props;
		
		updateQuestion(answer);
		if (currentQuestion + 1 === questions.length) history.push('/results');
	};

	render () {
		const {
			questions,
			currentQuestion,
			fetchQuestionsStatus
		} = this.props;
		const { 
			category = '', 
			question = '', 
			id = 0 ,
			correct_answer = "True"
		} = questions.length > 0 && currentQuestion <= questions.length ? questions[currentQuestion] : {};
		const { loading = false } = fetchQuestionsStatus;

		return (
			<div className="Quiz">
				<Text size="medium">{category}</Text>
				<div className="Quiz__question">
					{loading ? (
						<Spinner />
					) : (
						<>
							<Card>
								<Text>{question}</Text>
							</Card>
							<Text size="medium">{`${currentQuestion + 1} of ${questions.length}`}</Text>
						</>
					)}
				</div>
				<div className="Quiz__actions">
					<Button 
						onClick={() => {this.answerQuestion({id, isCorrect: correct_answer === "True"})}}
						disabled={loading}
					>
						True
					</Button>
					<Button 
						onClick={() => {this.answerQuestion({ id, isCorrect: correct_answer === "False" }) }}
						disabled={loading}
					>
						False
					</Button>
				</div>
			</div>
		);
	}
}

Quiz.propTypes = {
	fetchQuestions: PropTypes.func.isRequired,
	questions: PropTypes.arrayOf(PropTypes.shape({
		category: PropTypes.string,
		question: PropTypes.string,
		id: PropTypes.string
	})),
	currentQuestion: PropTypes.number.isRequired,
	updateQuestion: PropTypes.func.isRequired,
	startedGame: PropTypes.bool.isRequired,
	fetchQuestionsStatus: PropTypes.shape({
		loading: PropTypes.bool
	}).isRequired
};

const mapStateToProps = state => ({
	questions: state.questions.questions,
	currentQuestion: state.questions.current,
	startedGame: state.interface.started,
	fetchQuestionsStatus: state.questions.fetchQuestionsStatus
});

const mapActionsToProps = dispatch => ({
	fetchQuestions: requestInfo => dispatch(actions.fetchQuestions(requestInfo)),
	updateQuestion: questionInfo => dispatch(actions.updateQuestion(questionInfo))
});

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Quiz));