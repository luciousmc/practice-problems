

function changeElements(){
    // let elements = document.getElementsByClassName('numConvert');
    const elements = $('.numConvert');
    console.log('teh elements', elements);
    const elemListLen = elements.length;
    const numList = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numObj = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }

    $.each(elements, (i, elem)=>{
        elem.text(numObj[elem.text()]);
    })
}

function appendTextToElement(){

}

function addClass(){
}

function removeElements(){

}

