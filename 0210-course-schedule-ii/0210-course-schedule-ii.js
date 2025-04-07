/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let graph = new Map();
    for (let i=0; i<numCourses; i++) {
        graph.set(i, []);
    }
    for (let [course, prereq] of prerequisites) {
        graph.set(prereq, [...(graph.get(prereq) || []), course]);
    }

    let visiting = new Set();
    let visited = new Set();
    let res = [];
    let dfs = (node) => {
        if (visited.has(node)) return true;
        if (visiting.has(node)) return false;

        visiting.add(node);

        if (graph.get(node)) {
            for (let nei of graph.get(node)) {
                if (!dfs(nei)) {
                    return false;
                }
            }
        }

        visiting.delete(node);
        visited.add(node);
        res.push(node);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!visited.has(i)) {
            if (!dfs(i)) {
                return []; //cycle detected
            }
        }
    }

    return res.reverse();
};