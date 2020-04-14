import React from 'react';
import { shallow } from 'enzyme';

import { findElementByAttr } from '../../../utils';
import Spinner from './index';

const setup = (props = {}) => shallow(<Spinner {...props} />);

describe('Spinner component', () => {
	it('Should render with NO errors', () => {
		const wrapper = setup();
		const component = findElementByAttr(wrapper, 'Spinner');
		expect(component.length).toBe(1);
	});
});