import React from 'react';
import { shallow } from 'enzyme';

import { findElementByAttr } from '../../../utils';
import Card from './index';

const setup = (props = {}) => shallow(<Card {...props} />);

describe('Card component', () => {
	it('Should render with No errors', () => {
		const wrapper = setup();
		const component = findElementByAttr(wrapper, 'Card');
		expect(component.length).toBe(1);
	})
});


