/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [];

    for (let ast of asteroids) {
        let alive = true;

        while (alive && ast < 0 && stack.length && stack[stack.length - 1] > 0) {
            let rightMoving = stack[stack.length - 1];
            let leftMoving = Math.abs(ast);

            if (leftMoving > rightMoving) {
                stack.pop();
            }
            else if (leftMoving === rightMoving) {
                stack.pop();
                alive = false;
            }
            else {
                alive = false;
            }
        }

        if (alive) {
            stack.push(ast);
        }
    }

    return stack;
};