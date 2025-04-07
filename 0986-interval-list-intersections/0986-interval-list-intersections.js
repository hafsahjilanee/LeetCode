/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    //interval A is completely inside interval B
    //interval B is completely inside of A
    //the end point, so if B starts at a certain value and A ends that value, we'll include said num
    //start of one index comes before the end of another interval (partial overlap )
    
    let p1 = 0;
    let p2 = 0;
    let res = [];

    while (p1<firstList.length && p2<secondList.length) {
        let [start1, end1] = firstList[p1];
        let [start2, end2] = secondList[p2];

        if (start2>end1) p1++;
        else if (start1>end2) p2++; 
        else {
            res.push([Math.max(start1,start2), Math.min(end1,end2)])
            //1,8 [0,5]
            if (end1>end2) p2++;
            else p1++;
        } 
    }

    return res;
};