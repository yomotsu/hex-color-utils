export function toCSSColor( number: number ): string {

	return '#' + ( '00000' + ( number | 0 ).toString( 16 ) ).substr( - 6 );

}
