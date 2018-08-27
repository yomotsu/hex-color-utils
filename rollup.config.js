import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
const license = `/*!
 * color-translator
 * https://github.com/yomotsu/color-translator
 * (c) 2018 @yomotsu
 * Released under the MIT License.
 */`;

export default {
	input: 'src/index.ts',
	output: [
		{
			format: 'umd',
			file: pkg.main,
			name: 'colorHelper',
			banner: license,
			indent: '\t',
		},
		{
			format: 'es',
			file: pkg.module,
			banner: license,
			indent: '\t',
		}
	],
	plugins: [
		typescript( {
			typescript: require( 'typescript' ),
		} ),
	],
};
