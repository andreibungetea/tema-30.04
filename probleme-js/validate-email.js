// Exercitiul 3) sa se creeze o functie care primeste ca parametru un email.

// functia trebuie sa returneze

// 1) "This field is required" daca emailul nu a fost introdus

// 2) "Invalid username" daca emailul nu e valid. un mail valid:

// - are peste 6 caractere

// - contine un singur @ 

//  - contine un singur puncy dupa aarond

// - nu contine mai multi de arond sau mai multe puncte

// - nu contine caractere speciale in afara de _ sau -

// - nu contine _ sau - imediat inainte sau imediat dupa @

// - nu contine _ sau - inainte sau dupa .

// - @ trebuie sa fie inainte de .

// - @ trebuie sa nu se afle pe prima pozitie in string

// - . trebuie sa nu se afle pe ultima pozitie in string

// - intre @ si . trebuie sa existe cel putin un caracter

// - dupa . trebuie sa aiba minim 2 caractere

// 3) "Valid email" daca se trece de validarile de mai sus

// !!! Poate parea overwhelming ca sunt muulte cerinte sus, dar daca le iei pe rand sunt destul de simple

// luam conditiile de mai sus si la inversam. Cautam opusul
const specialCharecter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

const validateEmail = (email) => {
    if (email === "") return "This field is required";

    if (email.length < 6) return "Invalid username"; //nu purem {} daca avem o singura contiditie

    // contine un singur @ 
    let numberOfArrondds = 0;

    for (let i = 0, i < email.length; i++) {
        if (email[i] === "@") {
            numberOfArrondds++;
        }
    }

    if (numberOfArrondds !== 1) return "Invalid email";

    // contine un singur puncy dupa arond
    let numberOfDots = 0;

    for (let i = email.indexOf("@") +1; i < email.length; i++ ) {
        if (email[i] === ".") {
            numberOfDots++;
        }
        if (numberOfDots !==1) {
            return "Invalid email";
        }
    }

    // nu contine caractere speciale in afara de _ sau -
    for (let i = 0; i < email.length; i++) {
        if (specialCharecter[i].includes(email[i])) {
            return "Invalid email";
        }
    }

    // nu contine _ sau - imediat inainte sau imediat dupa @: cristian_@gmail.com
    const indexOfArrond = email.indexOf("@"); // index 9

    if (email[indexOfArrond - 1] === "_" || email[indexOfArrond + 1] === "-") {
        return "Email invalid";
    }
    if (email[indexOfArrond - 1] === "_" || email[indexOfArrond + 1] === "-") {
        return "Email invalid";
    }
};