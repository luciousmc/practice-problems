
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
                output.push(currentNum);
                outputSum = sumArray(output);
            }
        }
    }
    return output;
}

function getAllNamesShorterThan( array, maxLen ){
    const arrLen = array.length;
    const output = [];
    for(namei = 0; namei < arrLen; namei++){
        if(array[namei].length < maxLen){
            output.push(array[namei]);
        }
    }
    return output;
}

function makeLabel( personObj ){
     const {givenName:fName, familyName:lName, greeting:prefix, 'home address':address } = personObj;
     let adressee = `${prefix} ${fName} ${lName}\n`;
     let location = `${address.streetNumber} ${address.streetName}\n${address.city}, ${address.state} ${address.zip}`;

     let message = adressee + location;
     return message;
}
