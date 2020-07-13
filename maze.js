//You have entered a Maze and need to find your way out of it. 
//There are more than one possible paths through the Maze to the single exit point. 
//Write a recursive function that will help you find a possible path through the maze.

//You can use the following mazes to test your program.

let mySmallMaze = [
     [' ', ' ', ' '],
     [' ', '*', ' '],
     [' ', ' ', 'e']
 ];
 
 let maze = [
     [' ', ' ', ' ', '*', ' ', ' ', ' '],
     ['*', '*', ' ', '*', ' ', '*', ' '],
     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
     [' ', '*', '*', '*', '*', '*', ' '],
     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
 ];

 function findTheWayOut(maze, row=0, column=0, position=0, path=[], direction='S') {
     if (row < 0 || column < 0) {
          return;
     }
     if (row >= maze.length || column >= maze[0].length) {
          return;
     }
     path[position] = direction;
     position++;
     if (maze[row][column] === 'e') {
          console.log(position)
          console.log('Found the exit', path.slice(0, position))
          return;
     }
     if (maze[row][column] === ' ') {
          maze[row][column] = 'X';
          findTheWayOut(maze, row - 1, column, position, path, direction='U');
          findTheWayOut(maze, row + 1, column, position, path, direction='D');
          findTheWayOut(maze, row, column - 1, position, path, direction='L');
          findTheWayOut(maze, row, column + 1, position, path, direction='R');
          maze[row][column] = ' ';
     }
     position--;
 };

 console.log(findTheWayOut(mySmallMaze, row=0, column=0, position=0, path=[], direction='S'))