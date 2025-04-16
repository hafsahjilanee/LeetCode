/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    //N = #accounts, K = avg #emails per account. DFS is O(NK), and sorting is O(NK log NK).
    //O(NK) Storing the graph and visited emails.
    let graph = new Map();
    let emailToName = {};

    for (const account of accounts) {
        let name = account[0];

        for (let i=1; i<account.length; i++) {
            
            if (!graph.has(account[i])) {
                graph.set(account[i], new Set());
            }

            graph.get(account[1]).add(account[i]);
            graph.get(account[i]).add(account[1]);

            emailToName[account[i]] = name;
        }
    }

    //do dfs from each node of graph.keys
    let visited = new Set();
    let res = [];

    for (let email of graph.keys()) {
        if (!visited.has(email)) {
            visited.add(email);
            let localRes = [];
            let stack = [email];

            while (stack.length) {
                let node = stack.pop();
                localRes.push(node);

                for (let edge of graph.get(node)) {
                    if (!visited.has(edge)) {
                        visited.add(edge);
                        stack.push(edge);
                    }
                }
            }

            res.push([emailToName[email], ...localRes.sort()])
        }
    }

    return res;
};