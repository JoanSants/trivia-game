import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../store/actions';
import Button from '../../atoms/Button';

const StartGame = ({ startGame, history }) => {
	const onStartGame = () => {
		startGame();
		history.push('/quiz');
	};

	return <Button onClick={onStartGame} fullWidth>Begin</Button>;
}

StartGame.propTypes = {
	startGame: PropTypes.func.isRequired
}

const mapActionsToProps =  dispatch => ({
	startGame: () => dispatch(actions.startGame())
});

export default connect(null, mapActionsToProps)(withRouter(StartGame));
