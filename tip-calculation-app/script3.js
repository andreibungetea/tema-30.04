const tipButtons = document.querySelector(".tip-button");

const handleSelectTip = (e) => {
    // 1.gaseste butonul care este acum selectat
    const currentlySelectedTip = document.querySelector(".selected-tip");

    // 2. daca exista => scoate-i clasa selected-tip
    if (currentlySelectedTip !== null) { //facem verificarea sa existe
        currentlySelectedTip.classList.remove("selected.tip");
    }

    // 3.adaugan clasa selected-tip pe butonul apasat acum
    e.target.classList.add("selected-tip");

    // 4. sterg continutul inputului custom
    customTipInput.value = "";
};

tipButtons.forEach((tipButton) => {
    tipButtons.addEventListener("click", handleSelectTip);
}); 

const customTipInput = document.querySelector("#custom-tip"); //am folosit numela
// id-ului din html prin loc de .

const handleCustomTipInput = (e) => {
    const selectedTipButton = document.querySelector(".selected-tip");
    if (selectedTipButton !== null) {
        selectedTipButton.classList.remove("selected-tip");
    }
};


customTipInput.addEventListener("click", handleCustomTipInput);

// ------ Custom tip ---------
// selectam constanta in care userul introduce o valoare
const customTipInputError = document.querySelector("custom-tip-input-error");
const customTip = Number(data.get("#custom-tip")); //data este obiectul mare "data"
// notat mai sus din care preluam toate info din formular
if (customTip < 0) {
    customTipInputError.classList.remove("hide");
} else {
    customTipInputError.classList.add("hide");
}

// Number of people
const tipPerPersonParagraph = document.querySelector(".number-of-people");
const numberOfPeople = data.get(".number-of-people");

// calculate tip-per-person
const selectedTip = document.querySelector(".selected-tip");
if (selectedTip !== null) { //daca un buton este selectat
const percentage = Number(selectedTip.innerText.replace("%", "")); 
//inlocuim % cu nimic si transformam din string in number
const totalTip = bill * (percentage / 100);
const tipPerPeron = totalTip / numberOfPeople;
tipPerPersonParagraph.innerText = "$" + tipPerPeron.toFixed(2); 
} else {
    const totalTip = bill * (customTip / 100);
    const tipPerPeron = totalTip / numberOfPeople;
    tipPerPersonParagraph.innerText = "$" + tipPerPeron.toFixed(2);
}
//afisam rezultatul cu $: "$ + 7.50" = "$7.50"
