/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let directions = [[-1,0], [1,0], [0,1], [0,-1]];

    let q = [[sr, sc]];
    let original = image[sr][sc]

    let ROWS = image.length;
    let COLS = image[0].length;

    while (q.length) {
        let [r, c] = q.shift();

        image[r][c] = color;

        for (let [dr,dc] of directions) {
            let nr = r+dr;
            let nc = c+dc;

            if (Math.min(nr, nc)<0 || nr ===ROWS || nc === COLS 
            || image[nr][nc] !==original
            || image[nr][nc] === color){
                continue;
            }
            q.push([nr, nc]);
        }

    }

return image;
};