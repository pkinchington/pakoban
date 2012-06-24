// global variables for one tile
var width = 46;
var border = 2;

// utility function to translate an x,y tile position
// to a pixel position
function getPixels(x, y) {
  return {
    'top': (y * (width+border))+'px',
    'left': (x * (width+border))+'px'
  };
}

// utility function to translate a pixel position
// to a tile position
function getCoords(top, left) {
  return {
    'x': left / (width+border),
    'y': top / (width+border)
  };
}


