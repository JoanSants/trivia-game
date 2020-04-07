import React from 'react';
import { shallow } from 'enzyme';

import { findElementByAttr } from '../../../utils';
import QuizPage from './index';

const setup = (props) => shallow(<QuizPage {...props} />);

describe('Quiz page', () => {
	it('Should with NOT errors', () => {
		const wrapper = setup();
		const component = findElementByAttr(wrapper, 'QuizPage');
		expect(component.length).toBe(1);
	})
});
