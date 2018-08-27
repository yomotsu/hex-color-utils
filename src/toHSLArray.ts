import { toRGBArray } from 'toRGBArray';

export function toHSLArray( hexNumber: number ): number[] {

	const rgb = toRGBArray( hexNumber );
	const r = rgb[ 0 ];
	const g = rgb[ 1 ];
	const b = rgb[ 2 ];
	const max = Math.max( r, g, b );
	const min = Math.min( r, g, b );

	const lightness = ( min + max ) / 2;

	if ( min === max ) {

		const hue = 0;
		const saturation = 0;
		return [ hue, saturation, lightness ];

	} else {

		const delta = max - min;
		let hue = 0;
		let saturation = 0;

		saturation = lightness <= 0.5 ? delta / ( max + min ) : delta / ( 2 - max - min );

		switch ( max ) {

			case r: hue = ( g - b ) / delta + ( g < b ? 6 : 0 ); break;
			case g: hue = ( b - r ) / delta + 2; break;
			case b: hue = ( r - g ) / delta + 4; break;

		}

		hue /= 6;

		return [ hue, saturation, lightness ];

	}

}
