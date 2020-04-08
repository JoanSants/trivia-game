import React from 'react';
import { shallow } from 'enzyme';

import { findElementByAttr } from '../../../utils';
import { HomeTemplate } from './index';

const setup = (props = {}) => shallow(<HomeTemplate {...props} />);

describe('Home template', () => {
	it('Should render with NO errors', () => {
		const wrapper = setup();
		const component = findElementByAttr(wrapper, 'HomeTemplate');
		expect(component.length).toBe(1);
	})
});
