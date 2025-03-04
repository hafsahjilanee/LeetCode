/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let prev = 0; // Stores the last processed number (for * and / operations)
    let curr = 0; // Stores the current number being formed
    let res = 0;  // Stores the final result

    let curr_operation = '+'; // Tracks the last operation
    let i = 0;

    while (i < s.length) {
        let char = s[i];

        // Ignore spaces
        if (char === ' ') {
            i++;
            continue;
        }

        // Extract full number
        if (!isNaN(char)) {
            curr = 0;
            while (i < s.length && !isNaN(s[i]) && s[i] !== ' ') {
                curr = curr * 10 + parseInt(s[i]);
                i++;
            }
            i--; // Step back to correctly process the operator

            // Apply the last stored operation
            if (curr_operation === '+') {
                res += curr;
                prev = curr;
            } 
            else if (curr_operation === '-') {
                res -= curr;
                prev = -curr;
            } 
            else if (curr_operation === '*') {
                res -= prev; // Remove prev from result (undo last addition/subtraction)
                res += prev * curr; // Multiply and add back
                prev = prev * curr;
            } 
            else if (curr_operation === '/') {
                res -= prev; // Remove prev from result
                res += Math.trunc(prev / curr); // Integer division
                prev = Math.trunc(prev / curr);
            }
        } 
        else {
            // Update the operation
            curr_operation = char;
        }

        i++;
    }

    return res;
};
