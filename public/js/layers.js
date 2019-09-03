export function createBackgroundLayer(level, sprites){
  const buffer = document.createElement('canvas');
  buffer.width = 256;
  buffer.height = 240;

  const context = buffer.getContext('2d');

// looping over the grid variable in the matrix. Go into the level, into the tiles, and into the grid array
  level.tiles.forEach((tile, x, y) => {
    sprites.drawTile(tile.name, context, x, y);    
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

export function createCollisionLayer(level){
  const resolvedTiles = [];

  const tileResolver = level.tileCollider.tiles;
  const tileSize = tileResolver.tileSize;

  const getByIndexOriginal = tileResolver.getByIndex;
  tileResolver.getByIndex = function getByIndexFake(x, y){
    resolvedTiles.push({x, y});
    return getByIndexOriginal.call(tileResolver, x, y);
  }
  return function drawCollision(context) {
    context.strokeStyle = 'blue';
    resolvedTiles.forEach(({x, y}) => {
      context.beginPath();
      context.rext(x * tileSize, y * tileSize, tileSize, tileSize);
      context.stroke();
    });
    resolvedTiles.length = 0;
  };
}
// here we saved the get by index function inside the original so that we can use it later and then we override the original on the tile resolver object. so when that is called we can do whatever we want and then we return the rest of. the original call. the call method on a function binds the this keyword to a value.  