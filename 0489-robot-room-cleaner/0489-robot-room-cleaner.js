/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    
    //clockwise
    let directions = [[-1,0], [0,1], [1,0], [0,-1]]

    const goBack = () => {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }

    let visited = new Set(); //processed nodes
     
    let dfs = (x,y,direction) => {
        robot.clean();
        visited.add(`${x},${y}`);

        for (let i=0; i<4; i++) {
            let newDirection = (direction+i) % 4;
            let nr = x+directions[newDirection][0];
            let nc = y+directions[newDirection][1];

            if (!visited.has(`${nr},${nc}`) && robot.move()) {
                dfs(nr,nc, newDirection);
                goBack();
            }
            robot.turnRight();
        }
    }
    dfs(0,0,0);
};