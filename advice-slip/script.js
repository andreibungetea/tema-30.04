const generateButton = document.querySelector(".generate-button");
const adviceId = document.querySelector(".advice-id");
const adiveContent = document.querySelector(".advice-content");
const loadingSpiner = document.querySelector(".spinner");

const handleGenerateButton = async () => {
    //  disable pe buton
    generateButton.setAttribute("disabled", true);
    loadingSpiner.classList.remove("hide");
    
    const response = await fetch(("https://api.adviceslip.com/advice"));
    const data = await response.json();
    
    // eneble pe button
    generateButton.setAttribute("enable", true); 
    loadingSpiner.classList.add(".hide");   
    
    adviceId.innerText = data.slip.id;
    adiveContent.innerText = data.slip.advice;
};

generateButton.addEventListener("click", handleGenerateButton);

handleGenerateButton(); //la fiecare refresh avem alt advice; se reconstruieste
// codul in HTML si se reface js