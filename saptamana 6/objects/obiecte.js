// -- Objects --

let productname = "Laptop";
let productAvailableQuanity = 100;
let productPrice = 5000;
let productIsSoldOut = false;

let product = {
    name: "Latop MacBook M1 Air",
    availableQuantity: 100,
    price: 500,
    isSoldOut: false,
    related: ["Latop MacBook M1 pro", 
        "Latop MacBook M2", 
        "Latop MacBook M1 Intel",],
}

let user = {
    name: "vafvbbff",
    nomberOfFallowers:  1231465,
    numberOfFollowing: 321,
}

// Q: ce este un obiect?
// A: este un tip de data din JS (numer, string sau boolean, array)

// Q: La ce ajuta un obiect?
// A: la gruparea unui set de informatii care se refera la aceste entitati 

// Q: din ce este format un obiect?
// A: este format in key-value sau proprietate (ce este in partea stanga este key si ce este dupa : este valoarea)

// Q: Cum accesez o valore dintr-un obiect?
// A: accesand proprietata in care sta acea valoarea
// formulare: product.name

// Q: Ce nume pot pune unei proprietati?
// A: orice. doar sa fie folosita notatia camelcase   

// Q: Ce valoare poate sa contine o proprietate:
// A: orice valoare: number, string, boolea, array, obiect
// formualre: product.related
console.log(product.related);

// Exercitiu: sa se creeze un obiect cu 4 proprietati: number, string, boolea, array
let somebody = {
    name: "Paul",
    age: 32,
    isFootballPlayer: true,
    somebodyAdress: {
        streetNumber: 5,
        streetName: "Toma Caragiu",
        town: "Roman",
    },
}

// ---- Exercitii ------
let cartProducts = [
    {
        name: "Laptop",
        price: 5000,
        quantity: 1,
        category: "electronics",
    },
    {
        name: "Whiskey",
        price: 200,
        quantity: 3,
        category: "essentials",
    },
    {
        name: "vin",
        price: 100,
        quantity: 2,
        category: "essentials",
    },
];

// Sa se scrie un algoritm care calculeaza totalul cartului (pret+cantitate).

// let sum = 0; 

// for (let i = 0; i < cartProducts.length; i++) {
//     sum += cartProducts[i].price * cartProducts[i].quantity;}

// if (sum >= 1000 ) {
//         alert(`Ai obtinut o reducere de 10%. Noul total este de ${sum * 0.9} lei.`);
//     }



// "Ai obtinut o reducere de 10%. Noul total este de x lei."

// Ex 2: sa se scrie un algoritm care afiseaza cel mai scump produs din cart

// let max = cartProducts[0].price;

// for (let i = 1; i < cartProducts.length; i++) {
//     if (cartProducts[i].price > max) {
//         max = cartProducts[i].price;
//     }
// } console.log(max);

// Ex 3: sa se calculeza totalul produselor din cart care sunt din categorie "essentials"
let sum = 0;

for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].category === "essentials") {
        sum += cartProducts[i].price * cartProducts[i].quantity;
    }
} console.log(sum);
    
    
