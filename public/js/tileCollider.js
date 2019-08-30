class TileResolver {
  constructor(matrix, tileSize = 16){
    this.matrix = matrix;
    this.tileSize = tileSize;
  }

  toIndex(pos){
    return Math.floor(pos / this.tileSize);
  }
  getByIndex(indexX, indexY){
    const tile =  this.matrix.get(indexX, indexY);
    if (tile) {
      return {
        tile,
      };
    }
  }
}

// in order to know if we should collide with which tile, we need to transform Mario pos into the index of the tile. Coordinates correspond to our matrix. (x, y) converting tile positions into indeces. toIndex() takes the position and returns its index. 

window.TileResolver = TileResolver;

export default class TileCollider {
  constructor(tiles){
    this.tiles = tiles;
  }
  test(entity){
    // console.log('Testing', entity)
  }
}