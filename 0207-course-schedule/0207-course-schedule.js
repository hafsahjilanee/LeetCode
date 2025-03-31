/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let graph = new Map();

    for (let [course, prereq] of prerequisites) {
        if (!graph.has(course)) {
            graph.set(course, new Set());
        }
        graph.get(course).add(prereq);
    }

    let visited = new Set();
    let visiting = new Set();

    let dfs = (node) => {
        if (visited.has(node)) return true; //already processed skip
        if (visiting.has(node)) return false; //cycle detected

        visiting.add(node);

        if (graph.has(node)) { // Ensure the node exists in the graph
            for (const nei of graph.get(node)) {
                if (!dfs(nei)) return false;
            }
        }
        visiting.delete(node);
        visited.add(node);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!visited.has(i) && !dfs(i)) {
            return false;
        }
    }

    return true;
};