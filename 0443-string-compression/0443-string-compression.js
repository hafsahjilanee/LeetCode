/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let writeIdx = 0;
    let readIdx = 0;
    let count=0;

    while (readIdx <chars.length) {
        let currentChar = chars[readIdx];
        count = 0;
        
        while(readIdx<chars.length && chars[readIdx] === currentChar) {
            count++;
            readIdx++;
        }

        chars[writeIdx++] = currentChar;

        if (count>1) {
            for (const digit of String(count)) {
                chars[writeIdx++] = digit;
            }
        } 
    }

    return writeIdx;
};