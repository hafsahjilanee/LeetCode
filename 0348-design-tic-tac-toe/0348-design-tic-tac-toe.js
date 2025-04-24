/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    //tc O(n) for initializing array
    //sc 0(n)
    this.n = n;
    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.diag = 0;
    this.antiDiag = 0;
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    //tc 0(1)
    //sc O(1)
    let add = player === 1 ? 1: -1;

    this.rows[row] += add;
    this.cols[col] += add;

    if (row === col) {
        this.diag += add;
    }

    if (row + col === this.n-1) {
        this.antiDiag += add;
    }

    //check for +3/-3

    if (Math.abs(this.rows[row]) === this.n ||
    Math.abs(this.cols[col]) === this.n ||
    Math.abs(this.diag) === this.n ||
    Math.abs(this.antiDiag) === this.n) {
        return player
    }else {
        return 0;
    }
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */