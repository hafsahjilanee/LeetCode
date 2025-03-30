/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let graph = new Map();

    //create new Set for each char
    for (let word of words) {
        for (let char of word) {
            if (!graph.has(char)) {
                graph.set(char, new Set());
            }
        }
    }

    //build the graph by comparing adj words
    for (let i=0; i<words.length-1; i++) {
        let word1 = words[i];
        let word2 = words[i+1];

        //case where we have apple and then app
        if (word1.length>word2.length && word1.startsWith(word2)) {
            return "";
        }
        
        for (let j=0; j<Math.min(word1.length, word2.length); j++) {
            let char1 = word1[j];
            let char2 = word2[j];

            if (char1 !== char2) {
                //wrt and wrf
                //then add f to t 
                // t => f
                graph.get(char1).add(char2);
                break;
            }
        }
    }

    //topological sort
    let visiting = new Set(); //currently visiting nodes
    let visited = new Set(); //fully processed nodes
    let res = [];

    let dfs = (node) => {
        if (visited.has(node)) return true; //already been processed skip
        if (visiting.has(node)) return false; //cycle detected

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

    for (let char of graph.keys()) {
        if (!visited.has(char)) {
            if (!dfs(char)) {
                return "";
            }
        }
    }

    return res.reverse().join("");
};