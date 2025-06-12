const form = document.querySelector(".card-form");
const seccondStepContainer = document.querySelector(".seccond-step-container");
const cardholderNameError = document.querySelector(".cardholder-name-error");

const forbiddenCharacters = ["1", "2", "3"];
let isSubmited = false;

const handleSubmit = (e) => {
  e.preventDefault();
    
  isSubmited = true;

  const data = new FormData(e.target);

  // ---------- Cardholder name ----------
if (cardholderIsValid === false || cardNumber)
  
// ---------- Go to next step - variant A------------
const displayError = document.querySelector(".input-error:not(.hide)"); //not=psudo-selector

if (displayError === null) {
    form.classList.remove("hide");
    seccondStepContainer.classList.remove("hide");
    }
};
// ---------- Go to next step - variant A------------
// const displayError = document.querySelector(".input-error:not(.hide)"); //not=psudo-selector

// if (displayError === null) {
//     form.classList.remove("hide");
//     seccondStepContainer.classList.remove("hide");
//     }
// };

form.addEventListener("submit", handleSubmit);

// --------- Cardholder name input -----------
const cardHolderNameInput = document.querySelector("#cardholder-name");
const cardFrontName = document.querySelector(".card-front-name");

const handleCardHolderNameChange = () => {
    if (cardHolderNameInput.value.length === 0) {
        cardFrontName.innerText = "JANE APPLESEED";
    } else {
        cardFrontName.innerText = cardHolderNameInput.value;
    }    
    if (isSubmited === true) {
        validateName(cardHolderNameInput.value);
    }
};

cardHolderNameInput.addEventListener("input", handleCardHolderNameChange);

const validateName = (name) => {
      cardholderNameError.classList.add("hide");

    // 1. required
  if (name.length === 0) {
    cardholderNameError.classList.remove("hide");
    cardholderNameError.innerText = "This field is required";
    return false;
  }
  // 2. verificare caractere interzise (gen numere, \, ? etc)
  //   "Cristian10"
  for (let i = 0; i < name.length; i++) {
    if (forbiddenCharacters.includes(cardholderName[i])) {
      cardholderNameError.classList.remove("hide");
      cardholderNameError.innerText = "Must contain only letters";
      return false;
    }
  }
  // 3. limita maxima de 256 caractere
  if (name.length > 256) {
    cardholderNameError.classList.remove("hide");
    cardholderNameError.innerText = "Maximum number of characters is 256";
  }
  return true;
};

//  -------------- Cardholder number input ---------
const cardNumberInput = document.querySelector("#card-number");

const handleCardNumberChange = () => {
    //ex: "123456789" -> "1234 5678 9"
    // pasul 1. luam valoarea inputului fara spatii
    const currentNumber = cardNumberInput.value.replaceAll(" ", ""); //preluam valoara unui input
    
    // sau seteaza maxlenght pe input
    // "1234 1234 1234 12348" (lenght 20)
    // "1234 1234 1234 1234"
    if(cardNumberInput.length > 19) { //peste 16 cifre nu apare nimic
        cardNumberInput.value = cardNumberInput.value.slice(0, 19);
    }

    // pasul 2. adaugam spatii in valoarea inputului 
       
    let formatedNumber = "";

    for (let i = 0; i < currentNumber.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formatedNumber += " ";
        }
        formatedNumber += currentNumber[i]; //" "+"1"+"2"+"3"+ " "+... -> "123456789"
    }

    // pasul 3. inseram in input noua valoare
    cardNumberInput.value = formatedNumber;
};

cardNumberInput.addEventListener("input", handleCardNumberChange);

// "schema" pt eliminare spatii dintre cifre
// const cardNumber = "1234 5678 9";
// const formatedCardNumber = cardNumber.replaceAll(" ", ""); 