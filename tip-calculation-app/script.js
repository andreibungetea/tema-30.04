// ------------------ Tip Buttons ------------------
const tipButtons = document.querySelectorAll(".tip-button");

const handleSelectTip = (e) => {
  // 1. gaseste butonul care este acum selectat
  const currentlySelectedTip = document.querySelector(".selected-tip");

  // 2. daca exista => scoate-i clasa selected-tip
  if (currentlySelectedTip !== null) {
    currentlySelectedTip.classList.remove("selected-tip");
  }

  // 3. adauga clasa selected-tip pe button-ul apasat acum
  e.target.classList.add("selected-tip");
};

 

// higher order function (functie de nivel superior)
// pentru ca primeste ca parametru o alta functie.
// mai mereu acea functie o cream inline si este anonima.
tipButtons.forEach((tipButton) => {
  tipButton.addEventListener("click", handleSelectTip);
});

// ------------------ Calculator Form ------------------
const form = document.querySelector(".calculator-form");
const billInputError = document.querySelector(".bill-input-error");
const customTipInputError = document.querySelector(".custom-tip-input-error");
const tipPerPersonParagraph = document.querySelector(".tip-per-person");

const handleSubmit = (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  let numberOfErros = 0;
};
//   Bill

  // 1. Obtine numarul introdus de user in campul Bill
  const bill = Number(data.get("bill"));

//   console.log("bill");

  // 2. Daca numarul este mai mic sau egal decat zero =>
  // afiseaza paragraful cu eroare
  if (bill <= 0) {
    billInputError.classList.remove("hide");
    numberOfErros ++;
  } else {
    // 3. In caz contrar sa se ascunda paragraful cu eroare
    billInputError.classList.add("hide");
  }
   // 4. Sterge continutul inputului custom
customTipInput.value = "";

//------- Custom tip ------
const customTip = Number(data.get("custom-tip"));

if (customTip < 0) {
    customTipInputError.classList.remove("hide");
    numberOfErros ++;
} else {
    customTipInputError.classList.add("hide");
}

// ----------- Number of people --------------
const numberOfPeople = Number(data.get("number-of-people"));
if (numberOfPeople <= 0) {
    customTipInputError.classList.remove("hide");
} else {
    customTipInputError.classList.add("hide");
}

// ---Calculate tip per person---

// accesam butonul selectat
const selectedTip = document.querySelector(".selected-tip");


  
  if (selectedTip !== null) {
    const percentage = Number(selectedTip.innerText.replace("%", "")); //15% -> "15" -> 15
    const totalTip = bill * (percentage / 100);
    const tipPerson = totalTip / numberOfPeople;
    tipPerPersonParagraph.innerText = "$" + tipPerson.toFixed(2); //"$" + 7.5 = "$7.5" tip selectat din optiuni 
  } else { 
    const totalTip = bill * (customTip / 100);
    const tipPerson = totalTip / numberOfPeople;
    tipPerPersonParagraph.innerText = "$" + tipPerson.toFixed(2);
}

  
  // ---------- Calculate total per person -------------
const totalPerPerson = (bill * tipPerson) / numberOfPeople;

  
form.addEventListener("submit", handleSubmit);

// --------- Custom tip -------------
const customTipInput = document.querySelector("#custom-tip");

const handleCustomTipInput = () => {
    const selectedTipButton = document.querySelector(".selected-tip");
    if (selectedTipButton !== null) { //inseamna ca exista
        selectedTipButton.classList.remove("selected-tip");
    } else {
      selectedTipButton.classList.add("selected-tip");
    }
};

customTipInput.addEventListener("input", handleCustomTipInput);

// ---- Reset button ----
const resetButton = document.querySelector(".reset-button");
const billInput = document.querySelector("#bill");
const numberOfPeopleInput = document.querySelector(".number-of-people");

// golire input-uri
const handelReset = () => {
    billInput.value = "";
    customTipInput.value = "";
    numberOfPeopleInput.value = "";
    
    // Resetare paragrafuri
    tipPerPersonParagraph.innerText = "$0.00";
    totalPerPersonParagraph.innerText = "$0.00";
  };

resetButton.addEventListener("click", handelReset);