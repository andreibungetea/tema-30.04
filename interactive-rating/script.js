// Button One
const buttonOne = document.querySelector(".rating-button-one");

// 1. User-ul face click pe buton
// 2. din JS adaugam pe buton clasa selected-rating
// 3. din CSS adaugam automat pe button proprietatile clasei
// selected-rating

const handleButtonOneClick = () => {
  // 1. gaseste butonul care este acum selectat
  // 2. daca exista => scoate-i clasa selected-rating
    const currentlySelectedButton = document.querySelector(".selected-rating");
    if (currentlySelectedButton !== null) {
      currentlySelectedButton.classList.remove("selected-rating");
    }
    // 3. adauga clasa selected-rating pe butonul One
    buttonOne.classList.add("selected-rating");
};

buttonOne.addEventListener("click", handleButtonOneClick);

// Button Two
const buttonTwo = document.querySelector(".rating-button-two");

const handleButtonTwoClick = () => {
    const currentlySelectedButton = document.querySelector(".selected-rating");

    if (currentlySelectedButton !== null) { 
    currentlySelectedButton.classList.remove("selected-rating");
}
    buttonTwo.classList.add("selected-rating");
};

buttonTwo.addEventListener("click", handleButtonTwoClick);

// Button Three
const buttonThree = document.querySelector(".rating-button-three");

const handleButtonThreeClick = () => {
    const currentlySelectedButton = document.querySelector(".selected-rating");
    
    if (currentlySelectedButton !== null) { 
    currentlySelectedButton.classList.remove("selected-rating");
}
    buttonThree.classList.add("selected-rating");
};

buttonThree.addEventListener("click", handleButtonThreeClick);

// Button Four
const buttonFour = document.querySelector(".rating-button-four");

const handleButtonFourClick = () => {
    const currentlySelectedButton = document.querySelector(".selected-rating");
    
    if (currentlySelectedButton !== null) { 
    currentlySelectedButton.classList.remove("selected-rating");
}
    buttonFour.classList.add("selected-rating");
};

buttonFour.addEventListener("click", handleButtonFourClick);

// Button Five
const buttonFive = document.querySelector(".rating-button-five");

const handleButtonFiveClick = () => {
    const currentlySelectedButton = document.querySelector(".selected-rating");
    
    if (currentlySelectedButton !== null) { 
    currentlySelectedButton.classList.remove("selected-rating");
}
    buttonFive.classList.add("selected-rating");
};

buttonFive.addEventListener("click", handleButtonFiveClick);

// Top 3  cele mai comune cazuri in care folosim DOM-ul
// 1. Sa folosim elemente
// 2. Sa adaugam / stergem / modificam clase
// 3. Sa adaugam eventListner - specific pt butoane


// Submit button

const submitButton = document.querySelector(".raiting-submit-button");
const firstStepContainer = document.querySelector(".first-step-container");
const secontStepContainer = document.querySelector(".second-step-container");
const userSelection = document.querySelector(".user-selection");


const handleSubmit = () => {
    const currentlySelectedButton = document.querySelector(".selected-rating");

    if (currentlySelectedButton !== null) {
        firstStepContainer.style.display = "none";
        secontStepContainer.style.display = "block";
        userSelection.textContent = currentlySelectedButton.textContent;
    } else 
    alert("Please select rating"); 
};

submitButton.addEventListener("click", handleSubmit);

