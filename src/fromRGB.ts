export function fromRGB( r: number, g: number, b: number ): number {

	return ( r * 255 ) << 16 ^ ( g * 255 ) << 8 ^ ( b * 255 ) << 0;

}
