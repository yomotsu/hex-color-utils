# hex-color-utils

```javascript
import {
  toCSSColor,
  fromCSSColor,
  toRGBArray,
  fromRGB,
  fromHSL,
  fromHue,
  lighterThan,
  blendModeDifference
} from 'hex-color-utils';

toCSSColor( 0xff0000 ); // 16711680 (= 0xff0000)
fromCSSColor( '#f00' ); // 16711680 (= 0xff0000)

const r = 1; // 0 to 1
const g = 0; // 0 to 1
const b = 0; // 0 to 1
fromRGB( r, g, b ); // 16711680 (= 0xff0000)

toRGBArray( 0xff0000 ); // [ 1, 0, 0 ]

const hue = 0; // 0 to 1
const sat = 1; // 0 to 1
const lightness = 0.5; // 0 to 1
fromHSL( hue, sat, lightness ); // 16711680 (= 0xff0000)

toHSLArray( 0xff0000 ); // [0, 1, 0.5]

lighterThan( 0xff0000, 0xcc0000 ); // true
blendModeDifference( 0xff0000, 0xcc0000 ); // 3342336
```
