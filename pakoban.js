$('document').ready(function() {
  // Read in the level data
  var level = parseLevel();

  // Work out how many tiles are needed in total to render the level
  var numOfTiles = level.width * level.height;

  $('#level').css('height', level.height*tileWidth);
  $('#level').css('width', level.width*tileWidth);

  // add the required number of tiles to the level
  buildLevel(numOfTiles);

  // setup the tiles with the correct classes for their type
  setupLevel(level.data);
});

function parseLevel() {
  // Start with a fixed level. Replace this later with a levelCode
  // passed in after being read from somewhere.
  var levelCode = '8x9:--WWWWW-WWWFFFW-WDPBFFW-WWWFBDW-WDWWBFW-WFWFDFWWWBFZBBDWWFFFDFFWWWWWWWWW';

  var data = levelCode.split(':'),
      levelDims = data[0].split('x'),
      levelWidth = parseInt(levelDims[0], 10),
      levelHeight = parseInt(levelDims[1], 10),
      levelData = data[1];

  return {
    'width': levelWidth,
    'height': levelHeight,
    'data': levelData
  };
}

function buildLevel(numOfTiles) {
  for (var i = 0; i <= numOfTiles-1; i++) {
    $('div#level').append($('<div />').addClass('tile'));
  }
}

function setupLevel(levelData) {


  function getTileType (index) {
    var tile = levelData[index];
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
  });
}

function incrementMoveCount() {
  var curMoveCount = parseInt($('#moveCount').html(),10);
  curMoveCount++;
  $('#moveCount').html(curMoveCount);
}

// global variables for one tile
var tileWidth = 50;

// utility function to translate an x,y tile position
// to a pixel position
function getPixels(x, y) {
  return {
    'top': (y * tileWidth)+'px',
    'left': (x * tileWidth)+'px'
  };
}

// utility function to translate a pixel position
// to a tile position
function getCoords(top, left) {
  return {
    'x': left / tileWidth,
    'y': top / tileWidth
  };
}

