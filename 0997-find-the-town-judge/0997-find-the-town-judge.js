/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    // //we need to find cycle so let's make adj list first
    // let graph = new Map();
    // let res = -1;

    // for (let [person, personTheyTrust] of trust) {
    //     if (!graph.has(person)) {
    //         graph.set(person, new Set());
    //     }
    //     graph.get(person).add(personTheyTrust);
    //     res = personTheyTrust;
    // }

    // let visited = new Set();
    // let visiting = new Set();

    // let dfs = (node) => {
    //     if (visited.has(node)) return true;
    //     if (visiting.has(node)) return false;

    //     visiting.add(node);

    //     if (graph.has(node)) {
    //         for (let nei of graph.get(node)) {
    //             if (!dfs(nei)) return false;
    //         }
    //     }

    //     visited.add(node);
    //     visiting.delete(node);
    //     return true;
    // }

    // for (let i = 1; i <= n; i++) {
    //     if (!visited.has(i) && !dfs(i)) return -1;
    // }

    // return res;

    let trustCounts = new Array(n + 1).fill(0); // Track how many people trust each person
    let trustsSomeone = new Array(n + 1).fill(false); // Track who trusts others

    for (let [a, b] of trust) {
        trustsSomeone[a] = true;
        trustCounts[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (trustCounts[i] === n - 1 && !trustsSomeone[i]) {
            return i;
        }
    }

    return -1;
};