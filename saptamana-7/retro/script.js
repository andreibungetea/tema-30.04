//----- Functions -------
// const numeFunctie = () => {
// };

// varianta Gabi:
// let age = Number (prompt("How old are you?"));
// console.log(age);

// Varianta profu'
const handleUserAcces = () => {
    let age = prompt("How old are you?");
    age = Number(age);
    
// Exercitiul 1)
// let age = 20;
    
    if (age < 18) {
        alert ("Acces forbiden.");
    } else {
        alert ("Acces granted.");
}      
}; // console.log(typeof age);    
// handleUserAcces();

const getTotalProductPrice = (basePrice, taxRate, shipping) => {
    const totalPrice = basePrice + (basePrice * taxRate) / 100 + shipping;
    return totalPrice;
};

const productAPrice = getTotalProductPrice(100, 10, 15) ;

// console.log(productAPrice);

// Product A price
const productA = {
    id: 1,
    name: "Product A",
    isSoldOut: false,
    price: 100,
    tax: 10,
    fee: 15
};
const productATotalPrice = getTotalProductPrice (
    productA.price,
    productA.tax,
    productA.fee
);
console.log(productATotalPrice);

const productB = {
    id: 2,
    name: "Product B",
    isSoldOut: false,
    price: 100,
    tax: 10,
    fee: 15
};
const productBTotalPrice = getTotalProductPrice (
    productB.price,
    productB.tax,
    productB.fee
);
console.log(productATotalPrice);

// Exerctiul 2:
const getFlightPrice = (flightPrice, isMember) => {
    if (isMember === true) {
        return flightPrice - flightPrice * 0.10;
    } else {
        return flightPrice;
    }
}; 
const flightOne = getFlightPrice(500, true);
const flightTwo = getFlightPrice(400, false);

console.log(flightTwo);

// Exercitiul 2
const cofeePrice = (price, isMember, isStudent) => {
    if (isMember === true || isStudent === true) {
        return price - price * 0.15;
    } else return price;
};

const priceCofee = cofeePrice(10, true, false);

console.log(priceCofee);

// Exercitiul 3) Sa se creeze o functie care are un parametru - parola unui user.
// Daca parola nu a fost introdusa ( adica este egala cu un "" ) atunci sa se returneze "This field is required".
// Daca parola nu are macar 8 caractere => "Must contain at least 8 characters".
// Daca parola nu indeplineste niciun criteriu => "Very Weak password"
// Daca parola indeplineste un criteriu => "Weak password"
// Daca parola indeplineste doua criterii => "Weak password"
// Daca parola indeplineste trei criterii => "Strong password"

// Criterii:
// - sa contina macar un numar
// - sa contina macar o litera cu uppercase
// - sa contina un caracter special
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharecters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// parola: Parola12
const validatePassword = (password) => {
    if (password.lenght === "") {  //(password.lenght === 0)
        return "This fiels is required";
    }

    if (password.lenght < 8) {
        return "Must contain at leat 8 charactes";
    }
// acum definim criteriile pe care le folosim sa verificam cat de "puternica" este parola
// function scope
let criterias = 0;

for (let i = 0; i < numbers.length; i++) {
    // block scope creat de for
    if(password.includes(numbers[i])) { //password.includes("0") || password.includes("1")|| password.includes("2")...password.includes("9")
        // blocks cope creat de if - scopi-ul credt de parinte poate fi accesat de copil dar nu si invers
        criterias++;
        break;
    }
}

if (password !== password.toLowerCase()) {
    criterias++;
}

for (let i = 0; i < specialCharecters.lenght; i++) {
    if (password.includes(specialCharecters[i])) {
        criterias++;
    }
}

if (password === 0) {
    return "Very Weak password";
}

if (password === 1) {
    return "Weak password";
}

if (password === 2) {
    return "Weak password";
}

return "Strong password";

}; 
<form>
      <label for="name">Full name</label>
      <input type="text" id="name" />
      <br />

      <label for="email">Email</label>
      <input type="email" id="email" />
      <br />

      <label for="password">Password</label>
      <input type="password" id="password" />
      <br />
     

      <button>Submit</button>
    </form>



// Scope
// Scopu-ul reprezinta contextul curent de executie in care valorile si expresiile pot fi folosite. 
// Daca o variabila sau o expresie nu este in scopu-ul curent atunci nu poate fi folosita

// "...is not defined"

// Tipuri de scopu-uri:
// - Globale (variabile / constante globale)
// - Module Scope
// - Function scope (scope create de o functie)
// - Block scope (scope create de if / esle if / else, for)

// Scpurile sunt create intr-o ierarhie:
// global scope -> functions scope -> block scope

