export class Matrix {
  constructor(){
    // constructor just creates the grid, which is an array.
    this.grid = [];
  }
forEach(callback){
  this.grid.forEach((column, x) => {
    column.forEach((value, y) => {
      callback(tile, x, y);
    });
  });
}

  get(x, y) {
    // works similarly to the set method. 
    const col = this.grid[x];
    if (col){
      return col[y];
    } 
    return undefined;
  }
  set(x, y, value){
    // checks if the x exists in the grid. If not, it creates a new array.
    if (!this.grid[x]){
      this.grid[x] = [];
    }
    this.grid[x][y] = value;
  }
}

window.Matrix = Matrix;

// what happens when we instantiate the matrix is we only have one row of data. Then when we reset the value, we will count to x along the x axis(row) and then we will create the column.

export class Vec2 {
  constructor(x, y){
    this.set(x,y);
  }
  set(x,y){
    this.x = x; 
    this.y = y;
  }
}