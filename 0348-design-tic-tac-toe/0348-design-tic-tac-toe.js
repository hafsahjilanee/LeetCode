/**
 * @param {number} n
 */
var TicTacToe = function (n) {
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
TicTacToe.prototype.move = function (row, col, player) {
    //TC O(1) per move, as we're just updating and checking a few variables.
    //SC 0(N) bc we are using rows and cols array which will have size n
    let add = player === 1 ? 1 : -1;

    this.rows[row] += add;
    this.cols[col] += add;

    if (row === col) {
        this.diag += add;
    }
    if (row + col === this.n - 1) {
        this.antiDiag += add;
    }

    //check if count is 3/-3 for any row. col, diag, antiDiag

    if (Math.abs(this.rows[row]) === this.n || 
    Math.abs(this.cols[col]) === this.n || 
    Math.abs(this.diag) === this.n || 
    Math.abs(this.antiDiag) === this.n) {
        return player;
    }
    else {
        return 0;
    }
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */