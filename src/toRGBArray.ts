export function toRGBArray( hexNumber: number ): number[] {

	return [
		( hexNumber >> 16 & 255 ) / 255,
		( hexNumber >> 8 & 255 ) / 255,
		( hexNumber & 255 ) / 255,
	];

}
