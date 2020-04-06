import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';
import { checkProps, findElementByAttr } from '../../../utils';
import '@testing-library/jest-dom';

const setup = (props = {}) => shallow(<Button {...props} />);

describe('Button component', () => {
	describe('Checking propTypes', () => {
		it('Should not throw a warning', () => {
			expect(checkProps(Button, { onClick: () => { } })).toBeUndefined();
		});
	});

	describe('Renders', () => {
		let wrapper;
		let mockFunc;
		beforeEach(() => {
			mockFunc = jest.fn();
			wrapper = setup({ children: 'button', onClick: mockFunc, fullWidth: true })
		});
		
		it('Should render a Button', () => {
			const component = findElementByAttr(wrapper, 'Button');
			expect(component.length).toBe(1);
		});

		it('Should render Button children', () => {
			const component = findElementByAttr(wrapper, 'Button');
			expect(component.text()).toBe('button');
		});

		it('Should emmit an event on click', () => {
			const component = findElementByAttr(wrapper, 'Button');
			component.simulate('click');
			expect(mockFunc.mock.calls.length).toBe(1);
		});

		it('Should insert class as expected', () => {
			const component = findElementByAttr(wrapper, 'Button');
			expect(component.hasClass('Button--full')).toBeTruthy();
		})
	});
});
