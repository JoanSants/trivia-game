import * as actionTypes from '../../actions/actiontypes';
import { updateObject } from '../../../utils';

const initialState = {
	started: false
};

export default (state = initialState, actions) => {
	switch (actions.type) {
	case actionTypes.STARTGAME:
		return updateObject(state, { started: true });
	default:
		return state;
	}
};