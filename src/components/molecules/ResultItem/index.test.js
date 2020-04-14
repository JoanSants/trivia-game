import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findElementByAttr } from '../../../utils';

import ResultItem from './index';

const setup = (props = {}) => shallow(<ResultItem {...props} />);

describe('ResultItem component', () => {
	describe('Checking propTypes', () => {
		it('Should not throw warnings', () => {
			expect(checkProps(ResultItem, {
				question: 'Question?',
				isCorrect: false,
				correctAnswer: 'False'
			})).toBeUndefined();
		});
	});

	describe('Renders', () => {
		it('Should render a ResultItem component', () => {
			const wrapper = setup({
				question: 'Question?',
				isCorrect: false,
				correctAnswer: 'False'
			});
			const component = findElementByAttr(wrapper, 'ResultItem');
			expect(component.length).toBe(1);
		})
	});
});
