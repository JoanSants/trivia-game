import React from 'react';
import { shallow } from 'enzyme';

import { findElementByAttr } from '../../../utils';
import ResultPage from '.';

const setup = (props = {}) => shallow(<ResultPage {...props} />);

describe('ResultPage component', () => {
	it('Should render with NO errors', () => {
		const wrapper = setup();
		const component = findElementByAttr(wrapper, 'ResultPage');
		expect(component.length).toBe(1);
	});
});
