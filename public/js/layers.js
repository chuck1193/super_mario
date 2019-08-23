export function createBackgroundLayer(level, sprites){
  const buffer = document.createElement('canvas');
  buffer.width = 256;
  buffer.height = 240;

  const context = buffer.getContext('2d');
// looping over the grid variable in the matrix. Go into the level, into the tiles, and to the grid array
  level.tiles.grid.forEach((column, x) => {
    column.forEach((tile, y) => {
      sprites.drawTile(tile.name, context, x, y);
    });
  });

  return function drawBackgroundLayer(context){
    context.drawImage(buffer, 0, 0);
  }
}
export function createSpriteLayer(entities) {
  return function drawSpriteLayer(context) {
    entities.forEach(entity => {   
      entity.draw(context);
    });
  };
}