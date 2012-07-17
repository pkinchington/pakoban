# Ideas

**Note** I have included the development version of jQuery-1.7.2. This should really be swapped for a CDN hosted version in the final?

Look for that Sokoban Level Generator again and see if it can ge either integrated or used to build a bunch of levels.

## Boards are just a grid
Steal the checkers board code from the Codecademy lessons and mung it into something that can be used to draw a level.
How to define/load level layout? String where W=Wall, F=Floor, P=Player Start Position, B=Box, D=Destination, Z=Box at destination, -=Blank?

--WWWWW-
WWWFFFW-
WDPBFFW-
WWWFBDW-
WDWWBFW-
WFWFDFWW
WBFZBBDW
WFFFDFFW
WWWWWWWW

This is the level from the Wikipedia article on Sokoban.

Maybe encode it into a single line with the size of the grid first:

8x9:--WWWWW-WWWFFFW-WDPBFFW.... etc.

Replace the string method of storing a level layout with a method based on an array of stringss (shamelessly nicked from glancing at the later chapters of Eloquent Javascript.)
It's a much better idea as the dimensions of the level are defined by the dimensions of the array. Something like:

["--WWWWW-",
 "WWW   W-",
 "WoP#  W-",
 "WWW #oW-",
 "WDWW# W-",
 "W W o WW",
 "W# X##oW",
 "W   D  W",
 "WWWWWWWW"]

Also much easier to look at (i.e. printing to console for debugging) and see the layout of the level.
