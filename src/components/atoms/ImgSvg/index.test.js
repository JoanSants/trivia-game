import ImgSvg from './index';
import { checkProps } from '../../../utils';

describe('ImgSvg component', () => {
	describe('Checking propTypes', () => {
		it('Should NOT throw a warning', () => {
			expect(checkProps(ImgSvg, { name: 'keep'})).toBeUndefined();
		});
	});
});
