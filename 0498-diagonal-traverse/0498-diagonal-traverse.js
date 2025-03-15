/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let ROWS = mat.length;
    let COLS = mat[0].length;

    let going_up = true;
    let res = [];
    let row = 0;
    let col = 0;

    while (res.length !== ROWS*COLS) {
        res.push(mat[row][col]);
        if (going_up) {
            if (col === COLS-1) { //HAS HIT RIGHT BOUNDARY
                row++;
                going_up = false
            }
            else if (row===0) { //HAS HIT TOP BOUNDARY
                col++;
                going_up = false;
            }
            else {
                row-=1;
                col+=1;
            }
        }
        else { //GOING DOWN
            if (row === ROWS-1) { //bottom left boundary
                col++;
                going_up = true;
            }
            else if (col === 0) { //hits left boundary
                row++;
                going_up=true;
            }
            else {
                row+=1;
                col-=1;
            }

        }
    }

    return res;
};