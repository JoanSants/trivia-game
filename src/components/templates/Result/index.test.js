import React from 'react';
import { shallow } from 'enzyme';

import { findElementByAttr } from '../../../utils';
import ResultTemplate from '.';

const setup = (props = {}) => shallow(<ResultTemplate {...props} />);

describe('ResultTemplate component', () => {
	it('Should render with NO errors', () => {
		const wrapper = setup();
		const component = findElementByAttr(wrapper, 'ResultTemplate');
		expect(component.length).toBe(1);
	});
});
