import React from 'react';
import { shallow } from 'enzyme';

import App from './App.js';

const setup = (props = {}) => shallow(<App {...props} />);

describe('App Component', () => {
	it('Renders with NO errors', () => {
		const wrapper = setup();
		const component = wrapper.find(`[data-test='App']`);
		expect(component.length).toBe(1);
	});
});
