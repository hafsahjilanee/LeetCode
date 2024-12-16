/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (const mat of matrix) {
        if (binarySearch(mat,target)) {
            return true;
        }
        else {
            continue;
        }
    }
    return false;
};
    
var binarySearch = function(array, target) {
    let left = 0;
    let right = array.length-1;
    let middle;
    
    if (target< array[0] || target>array[array.length-1]) {
        return false;
    }
    
    while (left<=right) {
        middle = Math.floor((left+right)/2);
        
        if (array[middle]>target) {
            right = middle -1;
        }
        else if (array[middle]<target) {
            left = middle + 1;
        }
        else {
            return true;
        }
    }
    return false;
}