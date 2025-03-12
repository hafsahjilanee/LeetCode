/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    //use backtracking
    //nested dfs
    let i = 0;
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    let ROWS = board.length;
    let COLS = board[0].length;

    let dfs = (r, c, i) => {
        if (i === word.length) {
            return true;
        }

        if (Math.min(r, c ) < 0 || r === ROWS || c === COLS || board[r][c] !== word[i] || board[r][c] === '# ') {
            return false;
        }

        // Temporarily mark the cell as visited
        let temp = board[r][c];
        board[r][c] = "#";

        for (let [nr, nc] of directions) {

            if (dfs(r + nr, c + nc, i+1)) {
                return true; 
            }
        }

        board[r][c] = temp;
    }

    for (let r=0; r<ROWS; r++) {
        for (let c=0; c<COLS; c++) {
            if (dfs(r,c,0)) return true;
        }
    }

    return false;


};