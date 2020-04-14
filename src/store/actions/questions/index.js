import * as actionTypes from '../actiontypes.js';
import { v4 as uuid } from 'uuid';

const fetchQUestionsBegin = () => ({ type: actionTypes.FETCH_QUESTIONS_BEGIN });

const fetchQuestionsSuccess = (questions) => ({ 
	type: actionTypes.FETCH_QUESTIONS_SUCCESS, 
	payload: questions.map(question => ({
		...question,
		id: uuid()
	}))
});

const fetchQuestionsFailed = () => ({ type: actionTypes.FETCH_QUESTIONS_FAIL });

export const fetchQuestions = ({  quantity = 10, difficulty = 'hard', type = 'boolean' }) => dispatch => {
	dispatch(fetchQUestionsBegin());
	fetch(`https://opentdb.com/api.php?amount=${quantity}&difficulty=${difficulty}&type=${type}`)
		.then(response => {
			if (response.status !== 200) {
				dispatch(fetchQuestionsFailed());
				return;
			} 
			return response.json()
		}).then(data => {
			dispatch(fetchQuestionsSuccess(data.results))
		})
};

export const updateQuestion = (questionInfo) => (dispatch) => {
	dispatch({
		type: actionTypes.UPDATE_QUESTION,
		payload: questionInfo
	});
};

export const clearQuestions = () => (dispatch) => dispatch({ type: actionTypes.CLEAR_QUESTIONS});