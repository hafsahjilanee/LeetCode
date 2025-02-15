/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pathItems = path.split('/');
    console.log(pathItems);
    let stack = [];
    for (const item of pathItems) {
        if (item === '' || item === '.') {
            continue;
        }
        else if (item === '..') {
            stack.pop();
            continue;
        }
        stack.push(item);
    }
    
    return '/'+stack.join('/');

};