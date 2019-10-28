

function countOccurences( wordArray, word){
    const arrLen = wordArray.length;
    let count = 0;

    for(let i = 0; i < arrLen; i++){
        if (wordArray[i] === word){
            count++;
        }
    }
    return count;
}

function wordLengths( wordArray ){
    const arrLen = wordArray.length;
    const output = [];

    for(let i = 0; i < arrLen; i++){
        output.push(wordArray[i].length);
    }
    return output;
}

function getMinMaxMean( numArray ){
    const arrLen = numArray.length;
    const output = {
        min: numArray[0],
        max: numArray[0],
        mean: numArray[0]
    };

    for (let i = 1; i < arrLen; i++){
        let currentNum = numArray[i];
        output.mean += currentNum;

        if (currentNum > output.max){
            output.max = currentNum;
        } else if (currentNum < output.min){
            output.min = currentNum;
        }
    }
    output.mean = Math.ceil(output.mean / arrLen);

    return output;
}

function findMode( numArray ){
    const arrLen = numArray.length;
    let maxCount = 0;
    let currNum = 0;
    let currCount = 0;
    let output = 0;

    for (let numI = 0; numI < arrLen; numI++){
        currNum = numArray[numI];
        for (let checkNumI = 0; checkNumI < arrLen; checkNumI++){
            if (numArray[checkNumI] === currNum){
                currCount++
            }
        }
        if (currCount > maxCount){
            maxCount = currCount;
            currCount = 0;
            output = currNum;
        }
    }
    return output;
}
