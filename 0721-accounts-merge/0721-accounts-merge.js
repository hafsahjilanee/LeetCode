/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    let graph = new Map();
    let emailToName = {};

    //treat each email as a node and create a map of the other nodes(emails) it's connected to

    for (const account of accounts) {
        const name = account[0];

        for (let i = 1; i < account.length; i++) {
            let email = account[i]
            if (!graph.has(email)) {
                graph.set(email, new Set());
            }

            graph.get(account[1]).add(email);
            graph.get(email).add(account[1]);
            emailToName[email] = name;
        }
    }

    //run dfs
    let visited = new Set();
    let res = [];

    for (const email of graph.keys()) {
        if (!visited.has(email)) {
            let stack = [email];
            visited.add(email);
            let localRes = [];

            while (stack.length) {
                let node = stack.pop();
                localRes.push(node);

                for (const edge of graph.get(node)) {
                    if (!visited.has(edge)) {
                        stack.push(edge);
                        visited.add(edge);
                    }
                }
            }
            res.push([emailToName[email], ...localRes.sort()]);
        }
    }

    return res;
};