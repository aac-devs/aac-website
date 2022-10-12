/*
SCREEN SIZES:

TINY:    x <= 544px
SMALL:   544px < x <= 704px
MEDIUM:  704px < x <= 944px
-----------------
LARGE:   944px < x <= 1200px
XLARGE:  1200px < x <= 1344px
XXLARGE: 1344px < x

SMALL SIZES <= 944px
BIG SIZES > 944px
*/

export default function getScreenSize(): { height: number; width: number; orientation: string } {
  const { clientWidth: width, clientHeight: height } = window.document.documentElement;
  const orientation = window.screen.orientation.type;
  // console.log({ height, width, orientation });
  return { height, width, orientation };
}

/*
10px / 16px = 0.625 = 62.5%
Percentage of user's browser font-size setting


1rem = 16px
10rem = 160px
100rem = 1600px

font-size = 62.5%
1rem = 10px
10rem = 100px
100rem = 1000px

0 - 944px;

*/
