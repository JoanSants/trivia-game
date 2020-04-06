import React from 'react';

import './index.css';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import ImgSvg from '../../atoms/ImgSvg';

const HomeTemplate = () => (
	<div data-test="HomeTemplate" className="HomeTemplate">
		<Text>Welcome to the Trivia Challenge!</Text>
		<div className="HomeTemplate__description">
			<div className="HomeTemplate__description__logo">
				<ImgSvg name="clipboard" />
			</div>
			<Text size="small">You will be presented with 10 True or False questions.</Text>
		</div>
		<Text>Can you score 100%?</Text>
		<Button fullWidth onClick={() => {}}>
			Begin
		</Button>
	</div>
);

export default HomeTemplate;