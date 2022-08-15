class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.walls = {
      top: true,
      right: true,
      bottom: true,
      left: true
    };
    this.visited = false;
  }

  show = _ => {
    stroke(255);
    let x = this.x * w;
    let y = this.y * w;
    if (this.walls.right) line(x + w, y, x + w, y + w);
    if (this.walls.bottom) line(x + w, y + w, x, y + w);
    // For debugging
    if (this.visited) colorCell(x, y, [0, 100, 255, 100])
  };

  checkNeighbors = _ => {
    let neighbors = [];

    let top = grid[index(this.x, this.y - 1)];
    let right = grid[index(this.x + 1, this.y)];
    let bottom = grid[index(this.x, this.y + 1)];
    let left = grid[index(this.x - 1, this.y)];

    if (top && !top.visited) neighbors.push(top);
    if (right && !right.visited) neighbors.push(right);
    if (bottom && !bottom.visited) neighbors.push(bottom);
    if (left && !left.visited) neighbors.push(left);

    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else return null;
  };
}

function colorCell(x, y, [r, g, b, a = 255]) {
  strokeWeight(2)
  noStroke();
  fill(r, g, b, a);
  rect(x, y, w, w);
}

function index(x, y) {
  let edge = (x < 0 || y < 0 || x > cols - 1 || y > rows - 1)
  return edge ? -1 : (x + y * cols);
}