import { CSS_COLOR_KEYWORDS } from './constants';
import { fromRGB } from './fromRGB';
import { fromHSL } from './fromHSL';

export function fromCSSColor( cssColorString: string ): number {

	let m;

	if ( m = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec( cssColorString ) ) {

		// rgb / hsl

		let color;
		const name = m[ 1 ];
		const components = m[ 2 ];

		switch ( name ) {

			case 'rgb':
			case 'rgba':

				if ( color = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec( components ) ) {

					// rgb(255,0,0) rgba(255,0,0,0.5)
					const r = Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255;
					const g = Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255;
					const b = Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255;

					return fromRGB( r, g, b );

				}

				if ( color = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec( components ) ) {

					// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
					const r = Math.min( 100, parseInt( color[ 1 ], 10 ) ) / 100;
					const g = Math.min( 100, parseInt( color[ 2 ], 10 ) ) / 100;
					const b = Math.min( 100, parseInt( color[ 3 ], 10 ) ) / 100;

					return fromRGB( r, g, b );

				}

				break;

			case 'hsl':
			case 'hsla':

				if ( color = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec( components ) ) {

					// hsl(120,50%,50%) hsla(120,50%,50%,0.5)
					const h = parseFloat( color[ 1 ] ) / 360;
					const s = parseInt( color[ 2 ], 10 ) / 100;
					const l = parseInt( color[ 3 ], 10 ) / 100;

					return fromHSL( h, s, l );

				}

				break;

		}

	} else if ( m = /^\#([A-Fa-f0-9]+)$/.exec( cssColorString ) ) {

		// hex color

		var hex = m[ 1 ];
		var size = hex.length;

		if ( size === 3 ) {

			// #ff0
			const r = parseInt( hex.charAt( 0 ) + hex.charAt( 0 ), 16 ) / 255;
			const g = parseInt( hex.charAt( 1 ) + hex.charAt( 1 ), 16 ) / 255;
			const b = parseInt( hex.charAt( 2 ) + hex.charAt( 2 ), 16 ) / 255;

			return fromRGB( r, g, b );

		} else if ( size === 6 ) {

			// #ff0000
			const r = parseInt( hex.charAt( 0 ) + hex.charAt( 1 ), 16 ) / 255;
			const g = parseInt( hex.charAt( 2 ) + hex.charAt( 3 ), 16 ) / 255;
			const b = parseInt( hex.charAt( 4 ) + hex.charAt( 5 ), 16 ) / 255;

			return fromRGB( r, g, b );

		}

	}

	if ( cssColorString && cssColorString.length > 0 ) {

		// color keywords
		const hex = CSS_COLOR_KEYWORDS[ cssColorString ];

		if ( hex !== undefined ) {

			// 'red'
			return hex;

		} else {

			// unknown color
			return 0x000000;

		}

	}

	// unknown color
	return 0x000000;

}
