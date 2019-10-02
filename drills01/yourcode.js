
function sumArray( array ){
    const arrLen = array.length;
    let arrSum = 0;
    for (let i = 0; i < arrLen; i++){
        arrSum += array[i];
    }
    return arrSum;
}

function fitWithinVal( array, num ){
    const arrLen = array.length;
    const output = [];
    let outputSum = 0;

    for (let i = 0; i < arrLen; i++){
        let currentNum = array[i];
        if(currentNum < num){
            if(outputSum + currentNum < num){
                output.push(currentNum)
                outputSum = sumArray(output);
            }
        }
    }
    return output;
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
