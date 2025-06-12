const form = document.querySelector(".card-form");
const cardholderNameError = document.querySelector(".cardholder-name-error");
const secondStepContainer = document.querySelector(".second-step-container");
const cardNumberError = document.querySelector(".card-number-error");


const forbiderCharacters = ["0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", 
    "=", "+", "/", ".", ","]; //etc

let isSubmited = false;

const handleSubmit = (e) => {
    e.preventDefault();
    isSubmited = true; 

    const data = new FormData(e.target); //extrage toate info dintr-un formular

// --------- Cardholder name ------------
const cardholderName = data.get("cardholder-name");
    
if (cardholderNameInput === false) {
    form.classList.add("hide")
    secondStepContainer.classList.remove("hide");
}
    const cardholderNameIsValid = validateName(cardholderName);
    
    validateName(cardholderNameInput);
    
}; 

form.addEventListener("submit", handleSubmit);

// ------- Cardholder name input -------
const cardholderNameInput = document.querySelector("#cardholder-name");
const cardFrontName = document.querySelector(".card-front-name");

const handleCardholderNameChange = () => {
    if (cardholderNameInput.value.length === 0) {
        cardFrontName.innerText = "Jane Appleseed";
    } else {
        cardFrontName.innerText = cardholderNameInput.value; //ce se tasteaza in input apare si pe fata cardului 
    }

    if (isSubmited === true) {
        validateName(cardholderNameInput.value);
    }
};

cardholderNameInput.addEventListener("input", handleCardholderNameChange);

const validateName = (name) => {
    cardholderNameError.classList.add("hide");
// 1. required
    if (name.length === 0) {
        cardholderNameError.classList.remove("hide");
        cardholderNameError.innerText = "Can't be blank";
    }
    // 2. verificare caractere interzise (numere, /, ?, @ etc) prin for
    for (let i = 0; i < name.length; i++) {
        if (forbiderCharacters.includes(name[i])) {
            cardholderNameError.classList.remove("hide");
            cardholderNameError.innerText = "Must contain only letters";
            break; //opreste cautarea caracterelor speciale si o opreste la primul intalnit
        }
    }   
    // 3. limita max 256 caractere
    if (name.length > 256) {
        cardholderNameError.classList.remove("hide");
        cardholderNameError.innerText = "Maximum number of characters is 256";
    }
};

// ---- Card number -----
const cardNumber = document.querySelector("#card-number");

const handleCardNumberSubmit = () => {
    isSubmited = true;
    // const cardNumber = data.get("card-number");
    // const data = new FormData(e.target);
    const cardNumberIsValid = validateName(cardNumber);

    validateNumber(cardNumberInput);
};

cardNumber.addEventListener("input", handleCardNumberSubmit);


// ---- Card number input-----
// preluam ce introduce userul in input si afisam pe fata cardului
const cardNumberInput = document.querySelector("#card-number"); //ce se intro in input
const cardFrontContent = document.querySelector(".card-front-content");

const handleCardNumberChange = () => {
   
    if (cardNumberInput.value.length === 0) {
        cardFrontContent.innerText = "0000 0000 0000 0000";
       } else {
        cardFrontContent.innerText = cardNumberInput.value;
    }
    
    if (isSubmited === true) {
        validateNumber(cardNumberInput.value);
    }
    
    // sau seteaza maxlength pe input "1234 1234 1234 12348" (length 20)
    // -> "1234 1234 1234 1234"
    if (cardNumberInput.value.length > 19) {
        cardNumberInput.value = cardNumberInput.value.slice(0, 19);
        }

    // exemplu: "123456789" -> "1234 5678 9"
    // pasul1: luam valoarea inputului fara spatii
    const currentNumber = cardNumberInput.value.replaceAll(" ", ""); //preluam valoarea inputului

    // pasul 2: adaugam spatii in valoarea inputului - folosim for
    let formatedNumber = [];
    for (let i = 0; i < currentNumber.length; i++) {
    if (i > 0 && i % 4 === 0) {
        formatedNumber += " "; //"1234 5678 9"
    }
    formatedNumber += currentNumber[i]; //"1" + "2" + "3" +... = "123456789"
    }

    //pasul 3: inseram in input noua valoare
    cardNumberInput.value = formatedNumber; //introducem val lui formatedNumber in input

};  

cardNumberInput.addEventListener("input", handleCardNumberChange);
   
const validateNumber = (number) => {
    cardNumberError.classList.add("hide");
    // 1.requierd
    if (number.length === 0) {
        cardNumberError.classList.remove("hide");
        cardNumberError.innerText = "Can't be blank";
    }
    // 2.verificare caractere interzise - folosim for
    for (let i = 0; i < number.length; i++) {
        if (forbiderCharacters.includes(number[i])) {
            cardNumberError.classList.remove("hide");
            cardNumberError.innerText = "Wrong format. Numbers only";
            break; //for-ul se opreste la intalnirea unui caracter special
        }
    }
    // 3.limita maxima de 19 caractere
    if (number.length > 19) {
        cardNumberError.classList.remove("hide");
        cardNumberError.innerText = "Maximum number of characters is 19";
    }
};

   // ---- Expire date -----
const expireDate = document.querySelector("#expire-date");

const handleExpireDateChange = () => {
    const isSubmited = true;
    // const data = new FormData(e.target);
    // const expireDate = data.get("expire-date");
    const expireDateIsValid = validateExpire(expireDate);
    
};

    // validateExpire(expireDateInput);
expireDate.addEventListener("input", handleExpireDateChange);

//   ---- Expire date input -----
const cardExpireInput = document.querySelector("#expire-date");
const cardFrontDate = document.querySelector(".card-front-date");
const cardExpireDateError = document.querySelector(".card-expire-date-error");

const handleCardExpireInput = () => {
    
    if(cardExpireInput.value.length === 0) {
        cardFrontDate.innerText = "00/00";
    } else {
        cardFrontDate.innerText = cardExpireInput.value;
    }

    if (isSubmited = true) {
        validateExpire(cardExpireInput.value);
    } 

    if (cardExpireInput.value.length > 2) {
        cardExpireInput.value = cardExpireInput.value.slice(0,2);
    }
};

cardExpireInput.addEventListener("input", handleCardExpireInput);

const validateExpire = (expireDate) => {

    // 1.requierd
    if (expireDate.length === 0) {
        cardExpireDateError.classList.remove("hide");
        cardExpireDateError.innerText = "Can't be blank";
    }
    // 2.verificare caractere interzise - folosim for
    for (let i = 0; i < expireDate.length; i++) {
        if (forbiderCharacters.includes(expireDate[i])) {
            cardExpireDateError.classList.remove("hide");
            cardExpireDateError.innerText = "Wrong format. Numbers only";
        }
    }
    // 3.limita maxima de 2 caractere
    if (expireDate.length > 2) {
        cardExpireDateError.classList.remove("hide");
        cardExpireDateError.innerText = "Maximim number of characters is 2";
    }
};

// ---- CVC -------
const cvc = document.querySelector("#cvc");

const handleCvcChange = () => {
    isSubmited = true;
    const cvcIsValid = validateCvc(cvc);
};

cvc.addEventListener("input", handleCvcChange);

// ------- CVC input ---------
const cvcInput = document.querySelector("#cvc");
const cardBackCvc = document.querySelector(".card-cvc");
const cvcError = document.querySelector(".cvc-error");

const handleCvcInput = () => {
    if (cvcInput.value.length === 0) {
        cardBackCvc.innerText = "000";
    } else {
        cardBackCvc.innerText = cvcInput.value;
    }

    if (isSubmited = true) {
        validateCvc(cvcInput.value);
    }

    if (cvcInput.value.length > 3) {
        cvcInput.value = cvcInput.value.slice(0, 3);
    }
};

cvcInput.addEventListener("input", handleCvcInput);

const validateCvc = (cvc) => {
    // 1.required
    if (cvc === 0) {
        cvcError.classList.remove("hide");
        cvcError.innerText = "Can't be blank";
    }
    
    // 2.farbiden characters
    for (let i = 0; i < cvc.length; i++) {
        if (forbiderCharacters.includes(cvc[i])) {
            cvcError.classList.remove("hide");
            cvcError.innerText = "Wrong format. Numbers only";
        }
    }
    
    // 3. limita maxima de caractere
    if (cvc.length > 3) {
        cvcError.classList.remove("hide");
        cvcError.innerText = "Maximum number of characters is 3";
    }
};