// -- Functional Programing Way --
const product = {
    id: 123245,
    name: "Over-ear Headphones",
    price: 300,
    currency: "RON",
};

const getTotalProductPrice = (basePrice, hasPremiumSubscription) => {
    if (hasPremiumSubscription === true) return basePrice;

        return basePrice * 1.02;
} 
const totalPrice = getTotalProductPrice(product.price, false);


// Object Oriented Programing OOP 
//  - totul pleaca de la o clasa
// clasa are scopul de a tine info si de a avea in interiorul ei niste metode prin
// care sa accesez datele din clasa sau sa le manipulezi
class Product {
    constructor (id, name, price, currency) { //copiaza toate info si in clasa asta
        this.id = id;       
        this.name = name;
        this.price = price;
        this.currency = currency;
    }
    getTotalProductPrice(hasPremiumSubscription) {
        if (hasPremiumSubscription === true) return this.price;

        return this.price * 1.02;
    }

    getFormattedPrice() {
        return this.price + " " + this.currency;
    }
}
const productOne = new Product(
    product.id, 
    product.name, 
    product.price, 
    product.currency);

console.log(productOne.getTotalProductPrice(false));

const productTwo = new Product(8735, "Laptop Mac Book0", 8000, "RON");

// console.log(productTwo);

console.log(productTwo.getFormattedPrice());

// Cand ai ceva.altceva => ceva este obiect

// ----- Object wrapper ------
// La momentul executiei codului, JS-ul infasoara o valoare in Object wrapper-ul
// asociat tipului de data al acelei valori

// De ce? Vine cu metode si proprietati utile mie


// OW pt stringuri
class String {
    constructor(value) {
        this.value = value;
    }
    
    includes(searhedString) {
        // logica care cauta searchedString in this.value
    }
    
    toUpperCase() {
        // logica care converteste this.value la upperCase
    }
};

let password = new String("mohammed10");

// console.log(password.length);
console.log(password.toUpperCase);

// cum se vede "in spate" afisarea valorii lui x si primele 2 cifre de dupa virgula
// class Number = {}
// let x = new Number(10.83721);

let x = 10.83721;
console.log(x.toFixed(2)); // afiseaza primele 2 valori de dupa virgula

// !!! metodele exista doar in obiecte !!!









// const product = {
//     id: 123245,
//     name: "Over-ear Headphones",
//     price: 300,
//     currency: "RON",
// };

// const getTotalProductPrice = (basePrice, hasPremiumSubscription) => {
//     if (hasPremiumSubscription === true) return basePrice;
  
//     return basePrice * 1.02; 
// };

// const totalPrice = getTotalProductPrice(product.price, false);

// // ---Object Oriented Programing (OOB) --- 
// class Product {
//     constructor(id, name, price, currency) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.currency = currency;
//     }

//     getTotalProductPrice(hasPremiumSubscription) {
//         if (hasPremiumSubscription === true) return this.price;
  
//         return this.price * 1.02; 
//     }

//     getFormatedPrice() {
//         return this.price + " " + this.currency; //formula pe care o folosim sa afisaze formatul 8000 RON in csl
//     }
// }

// const productOne = new Product(product.id, product.name, product.price, product.currency);
// const productTwo = new Product(873, "MacBook Pro", 8000, "RON");

// console.log(productOne.getTotalProductPrice(false)); //aflu pretul total al lui productOne
// console.log(productTwo.getTotalProductPrice(true)); //aflu pretul total al lui productTwo
// console.log(productTwo.getFormatedPrice()); //afiseara formatul 8000 RON


// // --Object Wrapper ----
// // La momentul executiei codului, JS iti infasoara o valoarea in Object Wrapperu-ul 
// // asociat tipului de data al acelai valori. 

// // De ce? Vine cu proprietati si metode utile
// // ex: 
// class String {
//     constructor(value) {
//         this.value = value;
        
//     }
// }

// let password = String("mohamed10");

// console.log(password.length); // daca vreau sa aflu cate litere are acest string adaug lenght. Nu e nevoie sa scriu un cod separat 
//                     // .includes
//                     // .toUpperCase

//     pauza la 1.19.25