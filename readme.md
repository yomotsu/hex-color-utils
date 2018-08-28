# hex-color-utils

JavaScript primitive `number` between `0` ( === `0x000000` ) and `16777215` ( === `0xffffff` ) inclusive can be used as color. `hex-color-utils` is the utils for it.

```javascript
import {
  fromCSSColor,
  toCSSColor,
  fromRGB,
  toRGBArray,
  fromHSL,
  toHSLArray,
  lighterThan,
  blendModeDifference
} from 'hex-color-utils';

fromCSSColor( '#f00' );
// 16711680 (= 0xff0000)

fromCSSColor( 'red' );
// 16711680 (= 0xff0000)

fromCSSColor( 'rgba( 255, 0, 0 )' );
// 16711680 (= 0xff0000)

toCSSColor( 0xff0000 );
// '#ff0000'


const r = 1; // 0 to 1
const g = 0; // 0 to 1
const b = 0; // 0 to 1
fromRGB( r, g, b );
// 16711680 (= 0xff0000)

toRGBArray( 0xff0000 );
// [ 1, 0, 0 ]

const hue = 0; // 0 to 1
const sat = 1; // 0 to 1
const lightness = 0.5; // 0 to 1
fromHSL( hue, sat, lightness );
// 16711680 (= 0xff0000)

toHSLArray( 0xff0000 );
// [ 0, 1, 0.5 ]

lighterThan( 0xff0000, 0xcc0000 );
// true (compare with the lightness of HSL)

blendModeDifference( 0xff0000, 0xcc0000 );
// 3342336
```
