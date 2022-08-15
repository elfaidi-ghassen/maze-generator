// Recursive Backtracking Algorithm

let rows, cols;
let w = 20;
let current;
let grid = [];
let stack = []

function setup() {
  createCanvas(400, 400);
  rows = floor(height / w);
  cols = floor(width / w);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid.push(new Cell(x, y));
    }
  }
  current = grid[0];
}

function draw() {
  background(40);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;

  colorCell(current.x * w, current.y * w, [124, 24, 64])

  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    stack.push(current)
    removeWalls(current, next);
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop()
  }
}

function removeWalls(a, b) {
  let x = a.x - b.x;
  if (x === 1) {
    a.walls.left = false;
    b.walls.right = false;
  } else if (x === -1) {
    a.walls.right = false;
    b.walls.left = false;
  }

  let y = a.y - b.y;
  if (y === 1) {
    a.walls.top = false;
    b.walls.bottom = false;
  } else if (y === -1) {
    a.walls.bottom = false;
    b.walls.top = false;
  }
}