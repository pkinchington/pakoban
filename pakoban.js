

function setupBoard() {

  function parseLevel() {
    // Start with a fixed level. Replace this later with a levelCode passed
    // in after being read from somewhere.
    var levelCode = 8x9:--WWWWW-WWWFFFW-WDPBFFW-WWWFBDW-WDWWBFW-WFWFDFWWWBFZBBDWWFFFDFFWWWWWWWWW;

    var data = levelCode.split(':'),
        levelDims = levelData[0].split('x'),
        boardWidth = parseInt(levelDims[0], 10),
        boardHeight = parseInt(levelDims[1], 10),
        levelData = data[1];
  }

  function getTileType (index) {
    var tile;

    switch (tile) {
      case '-':
        return 'blank';
        break;
      case 'W':
        return 'wall';
        break;
      case 'F':
        return 'floor';
        break;
      case 'P':
        return 'player';
        break;
      case 'B':
        return 'box';
        break;
      case 'D':
        return 'destination';
        break;
      case 'Z':
        return 'boxcomplete';
        break;
      default:
        return 'unknown';
    }
  }

  $('div.tile').each(function(index, tile) {
    $(tile).addClass(getTileType(index));
  }
}

function incrementMoveCount() {
  var curMoveCount = parseInt($('#moveCount').html(),10);
  curMoveCount++;
  $('#moveCount').html(curMoveCount);
}

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


