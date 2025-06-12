const togle = document.querySelector(".togle");
const monthlyPrice = document.querySelectorAll(".monthly-price"); //luam toate preturile
const annuallyPrices = document.querySelectorAll(".annually-price");

let isMonthly = true;

const handleTogle = () => {
    // var 1 - e.target.checked: console.log(e.target.checked);

    // var 2 (if / else)
    // if (isMonthly === true) {
    //     isMonthly = false;
    // } else {
    //     isMonthly = true;   
    // }

    // var 3 (ternary operator) - are o comparatie
    // isMonthly = isMonthly === true ? false : true;
    // true === true ? true : true => false
    // true === false ? false : true => true

    // var 4 - (NOT operator)

    // true (initial) -> true = !true => false
    // true (initial) -> true = !false => true
    // cand avm o variabila booleana cu ! inainte => inversul ei
    isMonthly === !isMonthly; //false

    if (isMonthly === true) {
        // adaugam clasa hide pe monthly
        monthlyPrice.forEach((monthlyPrice) => {
        monthlyPrice.classList.add("hide");
        });
    } else { 
        // inlaturam clasa hide pe anuale
        annuallyPrices.forEach((annuallyPrice) => {
        annuallyPrice.classList.remove("hide");
        });
    }
    if (isMonthly === false) {
        // adaugam clasa remove pe monthly
        monthlyPrice.forEach((monthlyPrice) => {
        monthlyPrice.classList.add("hide");
        });
    } else { 
        // inlaturam clasa hide pe anuale
        annuallyPrices.forEach((annuallyPrice) => {
        annuallyPrice.classList.remove("hide");
        });
    }

}; 


togle.addEventListener("change", handleTogle);