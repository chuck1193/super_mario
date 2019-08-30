export default class TileResolver {
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

  matchByPosition(posX, posY){
    return this.getByIndex(
      this.toIndex(posX),
      this.toIndex(posY));
  }
}

// in order to know if we should collide with which tile, we need to transform Mario pos into the index of the tile. Coordinates correspond to our matrix. (x, y) converting tile positions into indeces. toIndex() takes the position and returns its index. 

// inside getByIndex if the tile is found then that tile will be returned. The reason that the returned tile is wrapped in an object is becasue we're gonna send out more mathod aide for the tile later.