import * as actionTypes from '../../actions/actiontypes';
import { updateObject } from '../../../utils';

const initialState = {
	questions: [],
	fetchQuestionsStatus: {
		success: false,
		failed: false,
		loading: false
	},
	current: 0
};

const updateQuestion = (state, action) => {
	const { questions, current } = state;
	const { id, isCorrect } = action.payload;
	
	return updateObject(state, {
		questions: questions.map(question => {
			if (question.id === id) return { ...question, isCorrect };

			return question;
		}),
		current: current < questions.length - 1 ? current + 1 : current
	});
};

export default (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.FETCH_QUESTIONS_BEGIN:
		return updateObject(state, { fetchQuestionsStatus: {
			...state.fetchQuestionsStatus,
			loading: true,
			success: false,
			failed: false
		}})
	case actionTypes.FETCH_QUESTIONS_SUCCESS:
		return updateObject(state, {
			fetchQuestionsStatus: {
				...state.fetchQuestionsStatus,
				loading: false,
				success: true
			},
			questions: action.payload
		})
	case actionTypes.FETCH_QUESTIONS_FAIL:
		return updateObject(state, {
			fetchQuestionsStatus: {
				...state.fetchQuestionsStatus,
				loading: false,
				failed: true
			}
		})
	case actionTypes.UPDATE_QUESTION:
		return updateQuestion(state, action)
	case actionTypes.CLEAR_QUESTIONS:
		return updateObject(state, { ...initialState });
	default:
		return state;
	}
};
