import React from 'react';
import { shallow } from 'enzyme';

import QuizTemplate from './index';
import { findElementByAttr } from '../../../utils';

const setup = (props = {}) => shallow(<QuizTemplate {...props}/>);

describe('Quiz template',  () => {
	it('Should render with NO errors', () => {
		const wrapper = setup();
		const component = findElementByAttr(wrapper, 'QuizTemplate');
		expect(component.length).toBe(1);
	});
});







