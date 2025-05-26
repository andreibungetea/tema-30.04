// -------- Tip buttons --------
const tipButtons = document.querySelectorAll(".tip-button");

const handleSelectTip = (e) => {
  // 1.gaseste butonul care este acum selectat
   const currentlySelectedtip  = document.querySelector(".selected-tip");

  // 2. daca exista, scoate-i clasa selected.tip
  if (currentlySelectedtip !== null) { //dc este if de null, inseamna ca exista
    currentlySelectedtip.classList.remove("selected-tip");
  }
  // 3. adauga clasa selected-tip 
  e.target.classList.add("selected-tip");

};
// hiergh order function - pentru ca primeste ca parametru o alta functie
// mai mereu acea funcntie o cream in-line si este ani=onima
tipButtons.forEach((tipButton) => {
  tipButton.addEventListener("click", handleSelectTip);
});

// --------- Calculator form ----------
const form = document.querySelector(".calculator-form");
const billInputError = document.querySelector(".bill-input-error");

const handleSubmit = (e) => {
  e.preventDefault();

const data = new FormData(e.target); //obtinem datele din formular
// e.target - referinta catre formularul in care s-a facut submit

// 1. Obtine nr introdus de user in campul de bill
const bill = Number(data.get("bill")); //get-ne da inputul introdus de user
// intr-un input din form. Aflam punand intre "" numele introdus la name in input
// 2. Daca nr este <= 0 -> afiseaza paragraful cu eroarea 
if (bill <= 0) {
  billInputError.classList.remove("hide");
} else {
  // 3. In caz contrar sa se  ascunda paragraful cu eroarea
  billInputError.classList.add("hide");
}

};

form.addEventListener("submit", handleSubmit); //punem submit pt ca vrem sa 
// "capturam" si f de enter

// ----------- Number of people -----------
const personInputError = document.querySelector(".person-input-error");

const handleSubmit = (e) => {
  const data = new FormData(e.target);

  const customTip = Number(data.get("custom-tip"));

  if (customTip <= 0) {
    personInputError.classList.remove("hide");
  } else {
    personInputError.classList.add("hide");
  }
};

personInputError.addEventListener("submit", handleSubmit);

