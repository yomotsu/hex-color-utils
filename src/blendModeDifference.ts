//```
// mix-blend-mode: difference;
// color: rgba( #fff, 0.4 );
//```
// based on https://en.wikipedia.org/wiki/Blend_modes#Difference
export function blendModeDifference( topColor: number, bottomColor: number ): number {

	return Math.abs( bottomColor - topColor );

}
