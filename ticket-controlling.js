// scroll page by click button
function scrollPage() {

  const scrollByButtonClick = document.getElementById("entry-ticket-booking");

  scrollByButtonClick.addEventListener("click", function scroll() {

    const ticketSection = document.getElementById("booking-ticket");
    ticketSection.scrollIntoView({ behavior: "smooth" });

  });
  
}


// select ticket

const clickedButtonsById = [];

function changeButtonColor(event) {
 
  const buttonId = event.target.id;

  
  if (!clickedButtonsById.includes(buttonId) && clickedButtonsById.length < 4) {
    
    const button = document.getElementById(buttonId);
    button.style.backgroundColor = '#48BB78';

  //  Available and Selected Seat 

    const currentSeat = document.getElementById("seat");
    const count = currentSeat.innerText;
    const seatCounting = parseInt(count);
    const newSeat = seatCounting + 1;
    currentSeat.innerText = newSeat;

    const totalPrice = document.getElementById("total-price");
    const updatePrice = newSeat * 550;
    totalPrice.innerText = updatePrice;

    
    const grandPrice = document.getElementById("grand-total");
    grandPrice.innerText = updatePrice;

    
    const currentAvailableSeat = document.getElementById("seat-count");
    const textAvailableSeat = currentAvailableSeat.innerText;
    const available = parseInt(textAvailableSeat);
    const nowAvailable = available - 1;
    currentAvailableSeat.innerText = nowAvailable;

    //  Adding seat in New Dynamic Div
    const newDiv = document.createElement("div");
    
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "space-between";

    
    const dynamicSeatName = document.createElement("span");
    
    dynamicSeatName.textContent = buttonId;
    newDiv.appendChild(dynamicSeatName);

    
    const staticClassName = document.createElement("span");
    
    staticClassName.textContent = "Economy";
    newDiv.appendChild(staticClassName );

    const staticPrice = document.createElement("span");
    
    staticPrice.textContent = "550";
    newDiv.appendChild(staticPrice);

    const dynamicElements = document.getElementById("dynamic-div");
    
    dynamicElements.appendChild(newDiv);

    
    clickedButtonsById.push(buttonId);

    
    const passengerInfo = document.getElementById("passenger-info");
    passengerInfo.classList.remove("hidden");

    // show couple
    
    if (clickedButtonsById.length === 4) {
     
      const couponPlace = document.getElementById("coupon-place");
      couponPlace.classList.remove("hidden");
    }
  }
}


const buttons = document.querySelectorAll("#button-container button");
for (let i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", changeButtonColor);
  
}

const passengerNumberInput = document.getElementById('input-number');
const nextButton = document.getElementById('next-button');

passengerNumberInput.addEventListener('input', function() {

    const passengerNumberValue = passengerNumberInput.value;
    const inputNumber = parseInt(passengerNumberValue);

    if (!isNaN(inputNumber)) {
        nextButton.removeAttribute('disabled');
    } else {
        nextButton.setAttribute('disabled',true);
    }
});


const nextButtonClick = document.getElementById("next-button");
const confirmMassage = document.getElementById("confirmation-massage");
const closeButton = confirmMassage.querySelector("#continue-button button");

nextButtonClick.addEventListener("click", function() {
  confirmMassage.showModal();
});

closeButton.addEventListener("click", function() {
  confirmMassage.close();
});



// enable apply

let couponCodeText; 
const couponText = document.getElementById("input-text");

couponText.addEventListener("keyup", function (event) {
  couponCodeText = event.target.value; 
  const applyButton = document.getElementById("apply-button");

  if (couponCodeText === "NEW15" || couponCodeText === "COUPLE20") { 

    applyButton.removeAttribute("disabled");

  }
   else {

    applyButton.setAttribute("disabled", true); 

  }
  
});


// coupon place 
const applyButtonClick =document.getElementById("apply-button");

  applyButtonClick.addEventListener("click", function () {
    
  const hideOfferPlace = document.getElementById("coupon-place");
  hideOfferPlace.style.display = "none";

  
  const currentSeat = document.getElementById("seat");
  const countSeat = parseInt(currentSeat.innerText);
  const updatePrice = countSeat * 550; 

  // discounted price

  let discountedPrice = updatePrice;
  let discountAmount = 0; 

  if (couponCodeText === "NEW15") {

    discountAmount = (updatePrice * 15) / 100; 
    discountedPrice = updatePrice - discountAmount;

  } else if (couponCodeText === "Couple20") {

    discountAmount = (updatePrice * 20) / 100; 
    discountedPrice = updatePrice - discountAmount;

  }

  // dynamic div

  const newDiv = document.createElement("div");
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "space-between";

  
  const staticClass = document.createElement("span");
  staticClass.textContent = "Discount Amount";
  newDiv.appendChild(staticClass);

  
  const dynamicDiscount = document.createElement("span");
  dynamicDiscount.textContent = discountAmount; 
  newDiv.appendChild(dynamicDiscount);

  
  const dynamicElements = document.getElementById("dynamic-div-discount");
  dynamicElements.appendChild(newDiv);

  // update grandprice
  const grandPrice = document.getElementById("grand-total");
  grandPrice.innerText = discountedPrice;

  
});




