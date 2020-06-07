

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

function correctCalcChecker(){

}

function doMath(){

}
