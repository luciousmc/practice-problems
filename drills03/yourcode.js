

function getPath(pathString){
    const pattern = /\w+/g;
    const output = pathString.match(pattern);
    return output;
}

function getPathParts(url){
    console.log(url);
    const re = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
    let result = re.exec(url);
    const parts = ['url', 'protocol', 'host', 'port', 'path', 'query', 'hash'];

    const urlParts = {};

    for (let i = 0; i < parts.length; i++){
        
    }
}

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
