/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let arr = [];
    let count =0;
    let valCount =0
    for (let i=0; i< nums.length- valCount; i++){
        if (nums[i] === val){
            console.log("numss",nums[i])
            // console.log("1")
           // console.log("iii", i)
            let elem = nums.splice(i, 1);
            nums.push(elem[0])
           // console.log("arr",nums);
            i--;
            valCount++;
            // continue;
        }
        // else{
        //     count++
        //     // console.log("2")
        //     // arr.push(num);
        // }
        
    }
    // console.log("vall", valCount)
    // console.log("FINAL NUMS",nums, nums.length)
     //console.log(count)
    return nums.length - valCount
};