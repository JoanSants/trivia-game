import React from 'react';
import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

const ImgSvg = ({ name }) => (
	<SvgLoader
		path={require(`../../../assets/svgs/${name}.svg`)}
	>
		<SvgProxy selector="path" />
	</SvgLoader>
);

ImgSvg.propTypes = {
	name: PropTypes.string.isRequired
};

export default ImgSvg;
