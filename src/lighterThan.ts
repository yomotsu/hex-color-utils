import { toRGBArray } from './toRGBArray';

export function lighterThan( hexColor0: number, hexColor1: number ): boolean {

	const color0MinElement = Math.min( ...toRGBArray( hexColor0 ) );
	const color1MinElement = Math.min( ...toRGBArray( hexColor1 ) );

	return color0MinElement > color1MinElement;

}
