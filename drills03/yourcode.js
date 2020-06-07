

function getPath(pathString){
    const pattern = /\w+/g;
    const output = pathString.match(pattern);
    return output;
}

function getPathParts(url){
    console.log(url);
    const re = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*)\/([a-zA-Z0-9\-.]+))?(?:\?([^#]*))?(?:#(.*))?$/
    const [ str, protocol, dash, host, port, path, file ] = re.exec(url);

    const urlParts = {
        protocol,
        host,
        port: parseInt(port),
        path,
        file
    };

    return urlParts;
}

function getCapitalCount(stringArray){
    let capCount = 0;

    stringArray.forEach(word => {
        if(isNaN(word[0])) {
            if(word[0] == word[0].toUpperCase()) {
                capCount++
            }
        }
    })
    return capCount;
}

function correctCalcChecker(array){
    const output = [];

    array.forEach(({ num1, num2, op, result }, index) => {
        if(result === doMath(num1, num2, op)) {
            output.push(array[index])
        }
    })

    return output;
}

function doMath(num1, num2, op){
    switch(op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case 'x':
            return num1 * num2;
        default:
            return null;
    }
}
