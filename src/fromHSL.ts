import { fromRGB } from './fromRGB';
import { fromHue } from './fromHue';

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

		const r = fromHue( q, p, _h + 1 / 3 );
		const g = fromHue( q, p, _h );
		const b = fromHue( q, p, _h - 1 / 3 );

		return fromRGB( r, g, b );

	}

}
