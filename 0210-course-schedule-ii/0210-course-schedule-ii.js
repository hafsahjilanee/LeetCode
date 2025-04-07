/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    //topological sort
    //initialize prereqs map
    let map = new Map();
    for (let i=0; i<numCourses; i++) {
        map.set(i,[])
    }

    for (let [course, prereq] of prerequisites) {
        map.get(course).push(prereq);
    }

    let visited = new Set(); //completely processed nodes
    let onPath = new Set(); //the nodes on the current path
    let res = [];

    const dfs = (course) => {
        console.log('course', course);
        //already visited
        if (visited.has(course)) {
            return true;
        }

        //found on the same path
        if (onPath.has(course)) {
            return false;
        }

        //add to the path
        onPath.add(course);
       
        for (let prereq of map.get(course)) {
            if (!dfs(prereq)) {
                return false;
            }
        }
        
        onPath.delete(course);
        visited.add(course);
        res.push(course);
    
        return true;

    }

    for (let i=0; i<numCourses; i++) {
        if (!dfs(i)) {
            return [];
        }
    }
   
    return res;
};