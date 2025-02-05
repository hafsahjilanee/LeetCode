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

    const dfs = (course) => {
        //course has already been visited
        if (visited.has(course)) {
            return false;
        }

        //course has no prereqs
        if (map.get(course).length===0) {
            return true;
        }

        visited.add(course);
        for (const prereq of map.get(course)) {
            if (!dfs(prereq)) {
                return false;
            }
        }

        visited.delete(course);
        map.set(course, []);
        console.log("visited after", visited);
        console.log("map after", map);
        return true
    }

    for (let i =0; i<numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }
    return true;
};