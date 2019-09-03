import TileResolver from './tileResolver.js';

export default class TileCollider {
  constructor(tileMatrix){
    this.tiles = new TileResolver(tileMatrix);
  }

  checkY(entity){
    const match = this.tiles.matchByPosition(entity.pos.x, entity.pos.y);
    if (!match){
      return;
    }
    if (match.tile.name !== 'ground'){
      return;
    }

    if (entity.vel.y > 0){
      if (entity.pos.y > match.y1) {
        entity.pos.y = match.y1;
        entity.vel.y = 0;
      }
    } else if (entity.vel.y < 0){
        if (entity.pos.y < match.y2) {
          entity.pos.y = match.y2;
          entity.vel.y = 0;
        }
      }
  }

  // match.y1 is a number that comes from the resolver that we are going to calculate in the resolver class. y1 is calculated from the coordinate system of tile indeces. y1 in this case, when index is two will be 2 * 16 which would being us down to 32. Will also calculate the y2, it will be the bottom of the y index. it will simply be tileIndex times the tileSize plus tileSize

  test(entity){
    this.checkY(entity);
  }
}