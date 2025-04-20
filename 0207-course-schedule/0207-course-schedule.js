/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let graph = new Map();

    for (let [course, prereq] of prerequisites) {
        if (!graph.has(course)) {
            graph.set(course, new Set())
        }
        graph.get(course).add(prereq);
    }

    //we need to detect cycle 
    let visited = new Set() //fully processsed nodes
    let visiting = new Set() //currently processing

    let dfs = (node) => {
        if (visited.has(node)) return true; //already processed skip
        if (visiting.has(node)) return false; //cycle detected

        visiting.add(node);

        if (graph.has(node)) {
            for (let nei of graph.get(node)) {
                if (!dfs(nei)) return false;
            }
        }

        //node is processed so
        visited.add(node);
        visiting.delete(node);
        return true;
    }

    for (let [course, _] of prerequisites) {
        if (!dfs(course) && !visited.has(course)) return false;
    }

    return true;
};