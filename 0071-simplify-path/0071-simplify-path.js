/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    //O(n) for both time and space
    let pathItems = path.split('/');
    let res = [];

    for (let item of pathItems) {
        if (item === "" || item === ".") {
            continue;
        }
        else if (item === "..") {
            res.pop();
        }
        else {
            res.push(item);
        }
    }

    return '/'+res.join('/');
};