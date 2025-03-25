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
var cleanRoom = function (robot) {
    //dfs+backtracking
    //order is important here bc we want to go up, right, down and left aka clockwise
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let visited = new Set();

    //robot should always be looking up
    const goBack = () => {
        //go 180 degrees
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }

    const backtrack = (x, y, direction) => {
        visited.add(`${x},${y}`);
        robot.clean();

        for (let i = 0; i < 4; i++) {
            let newDirection = (direction + i) % 4;

            let [dx, dy] = directions[newDirection];
            let newX = x + dx;
            let newY = y + dy;

            if (!visited.has(`${newX},${newY}`) && robot.move()) {
                backtrack(newX, newY, newDirection);
                //undo what we just did
                goBack()
            }
            robot.turnRight()
        }
    }
    backtrack(0, 0, 0)
};