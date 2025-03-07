/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pathItems = path.split("/");
    let res = [];
    console.log(pathItems)
    
    for (let item of pathItems) {
        if (item === ''|| item==='.') {
            continue;
        }
        else if (item === '..') {
            res.pop();
            continue;
        }
        res.push(item);
    }

    return '/'+res.join('/');
};