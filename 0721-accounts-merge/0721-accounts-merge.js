/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    //TC O(N × K log K)
    //SC O(N × K)
    //key email, value: all emails it's connected to
    let graph = new Map();
    let emailToName = {};

    for (const account of accounts) {
        const name = account[0];

        for (let i = 1; i < account.length; i++) {
            const email = account[i];
            emailToName[email] = name;

            if (!graph.has(email)) {
                graph.set(email, new Set());
            };

            graph.get(email).add(account[1]);
            graph.get(account[1]).add(email);
        }
    }

    let res = [];
    let visited = new Set();

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

            res.push([emailToName[email], ...localRes.sort()])
        }
    }
    return res;
};