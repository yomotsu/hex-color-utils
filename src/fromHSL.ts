import { fromRGB } from './fromRGB';

export function fromHSL( h: number, s: number, l: number ): number {

	// h,s,l ranges are in 0.0 - 1.0
	const _h = ( ( h % 1 ) + 1 ) % 1;
	const _s = Math.max( 0, Math.min( 1, s ) );
	const _l = Math.max( 0, Math.min( 1, l ) );

	if ( _s === 0 ) {

		return fromRGB( _l, _l, _l );

	} else {

		const p = _l <= 0.5 ? _l * ( 1 + _s ) : _l + _s - ( _l * _s );
		const q = ( 2 * _l ) - p;

		const r = hue2rgb( q, p, _h + 1 / 3 );
		const g = hue2rgb( q, p, _h );
		const b = hue2rgb( q, p, _h - 1 / 3 );

		return fromRGB( r, g, b );

	}

}

function hue2rgb( p: number, q: number, t: number ): number {

	if ( t < 0 ) t += 1;
	if ( t > 1 ) t -= 1;
	if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
	if ( t < 1 / 2 ) return q;
	if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
	return p;

}
