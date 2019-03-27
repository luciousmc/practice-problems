
function sumArray(array){
    var sumArrayCount = 0;
    for(var i = 0; i < array.length; i++){
        sumArrayCount += array[i];
    }
    return sumArrayCount;
}

function fitWithinVal(array, stopNumber){
    var total = 0;
    var i = 0;
    var outputArray = [];

    while (total < stopNumber && i < array.length){
        total += array[i];

        if (total > stopNumber) {
            total -= array[i];
        } else {
            outputArray.push(array[i]);
        }
        i++;
        }
    return outputArray;
}

function getAllNamesShorterThan(array, length) {
    var itemLen = 0;
    var outputArray = [];

    for (var i = 0;i < array.length; i++){
        itemLen = array[i].length;

        if (itemLen < length){
            outputArray.push(array[i]);
        }
    }
    return outputArray;
}


function makeLabel(personObj) {
    var info = personObj;
    var fName = info.givenName;
    var lName = info.familyName;
    var nameTitle = info.greeting;
    var streetNumber = info['home address'].streetNumber;
    var streetName = info['home address'].streetName;
    var addrCity = info['home address'].city;
    var addrState = info['home address'].state;
    var addrZip = info['home address'].zip;

    var output = nameTitle + ' ' + fName + ' ' + lName + '\n' + streetNumber + ' ' + streetName + '\n' + addrCity + ', ' + addrState + ' ' + addrZip;

    return output;
}
