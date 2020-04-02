import React from 'react';
import { shallow } from 'enzyme';

import Text from './index';
import { findElementByAttr, checkProps } from '../../../utils';

const setup = (props = {}) => shallow(<Text {...props} />);

describe('Text component', () => {
	describe('Checking propTypes', () => {
		it('Should not throw a warning', () => {
			expect(checkProps(Text, { size: 'small' })).toBeUndefined();
			expect(checkProps(Text, { size: 'medium' })).toBeUndefined();
			expect(checkProps(Text, { size: 'bigger' })).toBeUndefined();
			expect(checkProps(Text, { size: 'big' })).toBeUndefined();
			expect(checkProps(Text, { size: 'biggest' })).toBeUndefined();
		});
	});

	describe('Renders', () => {
		it('Should render a Text component', () => {
			const wrapper = setup();
			const component = findElementByAttr(wrapper, 'Text');
			expect(component.length).toBe(1);
		});

		it('Should render Text children', () => {
			const wrapper = setup({ children: 'content' });
			const component = findElementByAttr(wrapper, 'Text');
			expect(component.text()).toBe('content');
		});

		it('Should insert class as expected', () => {
			const wrapper = setup({ size: 'small' });
			const component = findElementByAttr(wrapper, 'Text');
			expect(component.hasClass('Text--small')).toBeTruthy();
		})
	});
});

