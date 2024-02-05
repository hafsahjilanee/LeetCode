/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let lowLength = low.toString().length;
    let highLength = high.toString().length;
    
    //get first digit
    //let firstDigit = Number(low.toString().charAt(0));
    let result = [];
    let length = lowLength;
    let j =Number(low.toString().charAt(0));;

    while (j<=9){
        if (length>highLength){
            break;
        }
        possibleNumber = addDigit(j,0, length);
        //console.log(possibleNumber, j)
        if (Number(possibleNumber)<=high && Number(possibleNumber)>=low && !result.includes(Number(possibleNumber))){
        result.push(Number(possibleNumber));
        j++;
        }else if (Number(possibleNumber)%10 !==9){
            j++;
        }
        else{
            length++;
            j=1;
        }

        possibleNumber=''; 

    }
    //console.log(result)
    return result
};

function addDigit(num, i, length) {
    if (i===length-1 || num%10===9){
        return num;
    }
    else{
        return `${num}${addDigit(++num,i+1, length)}`;
    }
}



