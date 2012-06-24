# Ideas

**Note** I have included the development version of jQuery-1.7.2. This should really be swapped for a CDN hosted version in the final?

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

