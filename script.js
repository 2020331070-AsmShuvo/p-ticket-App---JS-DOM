function buyTicket(){
    // console.log("buyTicket working"); 
     const ticketSection = document.getElementById('ticket-buy-section');
     ticketSection.scrollIntoView({behavior: 'smooth'});
}

let selected_tickets_cnt = 0;
let seatCntNum = 0;
let totalTicketPrice = 0;
let clickedButtons = []

function selectTicket(e){

    // checking if the button previusly selected :
    if(clickedButtons.includes(e)){
        alert("You can't select a seat multiple times");
        return;
    }
    else{
        clickedButtons.push(e);
    }


    // check if selected more than 4
    if(selected_tickets_cnt>=4){
        alert("You cant select more than 4 tickets of a vehicle")
        return;
    }
    selected_tickets_cnt++;
    // update the seat cnt start------------------------------------
    const selectedSeatCnt = document.getElementById('seat-cnt');
    let seatCnt = getValueOfTextByID('seat-cnt');
    seatCnt+=selected_tickets_cnt;
    console.log(seatCnt);
    seatCntNum++;
    setTextById('seat-cnt', seatCntNum);
    // update the seat cnt end-----------------------------------


    // update the seat left start:----------------------------------
    let availableSeat = document.getElementById('cnt-left-seats');
    let availableSeatText = getValueOfTextByID('cnt-left-seats');
    let availableSeatCnt=parseInt(availableSeatText);
    availableSeatCnt--;
    availableSeat.innerText = availableSeatCnt;
    // update the seat left end----------------------------------


    // updating the total price start:------------------------
    totalTicketPrice += 550;
    setTextById('total-price', totalTicketPrice);
    // updating the total price end:------------------------


    // updating grand price start---------------
    setTextById('grand-price', totalTicketPrice);
    // updating grand price end ---------------


    const btnId = e.id;
    const btn = document.getElementById(btnId);
    const seatText = btn.innerText;



    //  appending li into ul:

    const selectedSeatNo = document.createElement('li');
    selectedSeatNo.textContent = seatText;
    const selectedSeatClass = document.createElement('li');
    selectedSeatClass.textContent = "Economy";
    const selectedSeatPrice = document.createElement('li');
    selectedSeatPrice.textContent = 550;

    const ul = document.createElement('ul');

    ul.style.display = 'flex';
    ul.style.justifyContent = 'space-between';
    ul.style.alignItems = 'center';

    ul.appendChild(selectedSeatNo);
    ul.appendChild(selectedSeatClass);
    ul.appendChild(selectedSeatPrice);
    
    const seatListContainer = document.getElementById('seat-list-container');
    seatListContainer.appendChild(ul);

    setBackgroundGreen(btnId)

    // enabling the next button after 4 coupons selected:
    if(seatCntNum==4){
        document.getElementById("coupon-input").removeAttribute("disabled");
        document.getElementById("btn-apply-coupon").removeAttribute("disabled");
    }

}


function successful(){

    // check filled or not start-------------------------------
    const name =  getTextValueOfInputById('passenger-name');
    console.log(name);
    const phone =  getTextValueOfInputById('passenger-number');
    console.log(phone);
    const email =  getTextValueOfInputById('passenger-email');
    console.log(email);
    const phoneNumberInput = document.getElementById('passenger-number').value;
    if(seatCntNum==0){
        alert("Please select a ticket first");
        return;
    }
    if(phoneNumberInput.trim() === ''){
        alert("Please give your number");
        return;
    }
    // check filled or not end-------------------------------


    // change screen
    const landingPage =  document.getElementById('landing-page');
    landingPage.classList.add("hidden");
    const successfulSec = document.getElementById('successful-section');
    successfulSec.classList.remove('hidden');
}

function Continue(){
    // const landingPage =  document.getElementById('landing-page');
    // landingPage.classList.remove("hidden");
    // const successfulSec = document.getElementById('successful-section');
    // successfulSec.classList.add('hidden');
}