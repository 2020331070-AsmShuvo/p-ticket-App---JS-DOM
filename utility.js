function setBackgroundGreen(id){
    const elem = document.getElementById(id);
    elem.classList.add('bg-green-500');
    elem.classList.add('text-white');
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


function showAlert(msg) {
    const alertContainer = document.getElementById('alertContainer');
    const alertMsg = document.getElementById('alert-msg');
    alertMsg.innerText = msg;
    alertContainer.classList.remove('hidden');

}

function hideAlert(msg) {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.classList.add('hidden');
}