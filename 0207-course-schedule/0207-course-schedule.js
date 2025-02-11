/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //complexity O(n+prereq)
    let map = new Map();
    //numOfCourses are also courses
    for (let i=0; i<numCourses; i++) {
        map.set(i, []);
    }
    for (const [course, prereq] of prerequisites) {
        map.get(course).push(prereq);
    }
    let visited = new Set();
    let onPath = new Set();

    const dfs = (course) => {
        //course has already been visited, skip
        if (visited.has(course)) {
            return true;
        }

        //course found on current path
        if (onPath.has(course)) {
            return false;
        }

        onPath.add(course);
        for (const prereq of map.get(course)) {
            if (!dfs(prereq)) {
                return false;
            }
        }

        onPath.delete(course);
        visited.add(course);
        return true
    }

    for (let i =0; i<numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }
    return true;
};