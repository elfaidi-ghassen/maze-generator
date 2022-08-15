## Implementation

1. Make the initial cell as the current cell and mark it as visited
2. While there are unvisited cells

   1. If the current cell has any unvisited neighbors

      1. Chose randomly one of the unvisited neighbors
      2. push the current cell to the stack
      3. Remove the wall between the current cell and the chosen cell
      4. Make the chosen cell the current cell and mark it as visited

   2. Else if stack is empty

      1. Pop a cell from the stack
      2. Make it the current cell