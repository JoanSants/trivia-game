import React from 'react';
import { shallow } from 'enzyme';

import { findElementByAttr } from '../../../utils';
import HomePage from './index';

const setup = (props = {}) => shallow(<HomePage {...props}/>);

describe('Home page', () => {
	it('Should render with NO errors', () => {
		const wrapper = setup();
		const component = findElementByAttr(wrapper, 'HomePage');
		expect(component.length).toBe(1);
	})
});
