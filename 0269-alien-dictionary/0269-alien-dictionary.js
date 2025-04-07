/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
    //TC O(C), where C is the total number of characters across all words.
    //SC O(V + E), where:
    //V = Number of unique characters (vertices).
    //E = Number of edges (dependencies between characters)
    let graph = new Map();

    //create graph of each char
    for (let word of words) {
        for (let char of word) {
            graph.set(char, new Set());
        }
    }

    //map out graph by word[i] and word[i+1]
    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];

        //apple and app
        if (word1.length > word2.length && word1.startsWith(word2)) {
            return "";
        }

        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            let char1 = word1[j];
            let char2 = word2[j];

            //we only care where there is a difference
            if (char1 !== char2) {
                graph.get(char1).add(char2);
                break;
            }
        }
    }

    let visiting = new Set();
    let visited = new Set();
    let res = [];

    let dfs = (node) => {
        if (visiting.has(node)) return false; //cycle
        if (visited.has(node)) return true; //skip

        visiting.add(node);

        for (let nei of graph.get(node)) {
            if (!dfs(nei)) {
                return false;
            }
        }

        visiting.delete(node);
        visited.add(node);
        res.push(node);
        return true;
    }

    for (let key of graph.keys()) {
        if (!visited.has(key) && !dfs(key)) {
            return "";
        }
    }

    return res.reverse().join("");
};