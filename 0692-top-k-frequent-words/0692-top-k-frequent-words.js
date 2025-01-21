/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    //use max heap where root is the most frequent element
    //we'll keep item[0] as the frequency
    let maxPQ = new MaxPriorityQueue({compare: (a,b) =>{
            if (a.freq>b.freq) {
                return -1;
            }
            else if (a.freq<b.freq) {
                return 1;
            }
            else {
                return a.word.localeCompare(b.word);
            }
        }
    })
    let map = new Map();
    for (const word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word)+1);
        }
        else {
            map.set(word, 1);
        }
    }
    // [word, freq] is [key, value]
    for (const [word, freq] of map) {
        console.log('rrrrr',{word, freq})
        maxPQ.enqueue({word, freq});
    }

    let result = [];
    let count = 0;

    while (count<k) {
        result.push(maxPQ.dequeue().word)
        count++;
    }
    return result;
};