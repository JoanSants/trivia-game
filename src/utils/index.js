import checkPropTypes from 'check-prop-types';

export const findElementByAttr = (component, dataTest) => component.find(`[data-test="${dataTest}"]`);

export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

export const updateObject = (oldObject, updatedProperties) => ({...oldObject, ...updatedProperties});