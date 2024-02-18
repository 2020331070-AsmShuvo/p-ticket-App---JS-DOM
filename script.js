function buyTicket(){
    // console.log("buyTicket working"); 
     const ticketSection = document.getElementById('ticket-buy-section');
     ticketSection.scrollIntoView({behavior: 'smooth'});
}

let selected_tickets_cnt =0;
function selectTicket(e){
    if(selected_tickets_cnt>=4){
        alert("You cant select more than 4 tickets of a vehicle")
        return;
    }
    selected_tickets_cnt++;
    const seatText = e.innerText;
    console.log(seatText);

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
}