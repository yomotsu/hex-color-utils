import { toHSLArray } from './toHSLArray';

export function lighterThan( hexColor0: number, hexColor1: number ): boolean {

	const lightness0 = toHSLArray( hexColor0 )[ 2 ];
	const lightness1 = toHSLArray( hexColor1 )[ 2 ];

	return lightness0 > lightness1;

}
