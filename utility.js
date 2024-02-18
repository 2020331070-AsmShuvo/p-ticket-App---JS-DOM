function setBackgroundGreen(id){
    const elem = document.getElementById(id);
    elem.classList.add('bg-green-600');
}

function getValueOfTextByID(id){
    const elem = document.getElementById(id);
    const elemText = elem.innerText;
    const value = parseFloat(elemText);
    return value;
}

function setTextById(id, number){
    const elem = document.getElementById(id);
    elem.innerText=number;
}

function getTextValueOfInputById(id){
    const elem = document.getElementById(id);
    const inputText = elem.value;
    return inputText;
    // console.log(inputText);

}