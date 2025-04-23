console.log(products);
"The most expesensive product is x"
// --- Varianta Gabi ---
// let max = 0;
// let maxTitle;

// for (let i = 1; i < products.length; i++) {
//   if (products[i].price > max) {
//       max = products[i].price;
//       maxTitle = products[i].title;
//   }
// } console.log(maxTitle);

// ---Varianta prof.---
let mostExpensiveProduct = products[0];

// -- varianta extinsa---
// for (let i = 1; i < products.length; i++) {
//   if (products[i] > mostExpensiveProduct.price) {
//     mostExpensiveProduct = products[i];
//   }
// } console.log(`The most expesensive product is ${mostExpensiveProduct.title}, it costs $${mostExpensiveProduct.price} and it is rated to ${mostExpensiveProduct.rating.rate} out of 5 by ${mostExpensiveProduct.rating.count} customers.`);
// -- varianta simpla - fara sa mai punem mostExpensiveProducts

// object distructuring
// formula: let = {[nume proprietate], [nume proprietate:{}],...} = [obiect-din-care-vrei-sa-scoti-proprietati];
let {title, price, rating: { rate, count } } = mostExpensiveProduct;
// o sa creeze 4 variabile: title, price, rate si count, iar fiecare variabila o sa aiba ca valoarea
// valoarea proprietatii cu acelasi nume din obiectul mostExpensiveProduct.

// title va prelua valoarea: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
// price va prelua valoare: 999.99
// rate va prelua valoarea: 2.2
// count ca prealua valoarea: 140

for (let i = 1; i < products.length; i++) {
  if (products[i] > mostExpensiveProduct.price) {
    mostExpensiveProduct = products[i];
  }
} console.log(`The most expesensive product is ${title}, it costs $${price} and it is rated to ${rate} out of 5 by ${count} customers.`);

// Cand dai peste "undefined":
// atunci cand declari o variabila fara sa o initializezi => acea variabila p sa contina "undefined"
// atunci cand incerci sa accesezi o proprietate care nu exista (ex: mostExpensiveproduct.tax)

// exercitiu 2: sa se srie un algoritm care afiseaza in consola numele celui mai scump produs
// din categoria jewelery "The most expensive jewelery is x" 

let theMostexpensiveJewelery;

for (let i = 0; i < products.length; i++) {
  if (products[i].category === "jewelery") {
    theMostexpensiveJewelery = products[i];
  break;
  }
}

for (let i = 0; i < products.length; i++)
if(products[i].price > theMostexpensiveJewelery.price && products[i].category === "jewelery"){
  theMostexpensiveJewelery = products[i];
}

// let max = theMostexpensiveJewelery.price; 

// for (let i = 0; i < products.length; i++) {
//      if(theMostexpensiveJewelery.price > max) {
//         max = theMostexpensiveJewelery.price;
//    }
// }
console.log(`The most expensive jewelery is $${theMostexpensiveJewelery.price}`);
//max 

// Exercitiu 3
// Sa se scrie un algoritm care sa afiseze toate produsele din
// categria "jewelery"
let jeweleryProducts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].category === "jewelery") {
    jeweleryProducts.push(products[i]);
  }
} console.log(jeweleryProducts);

// Exercitiu 4
// Sa se scrie un algoritm care sa afiseze toate produsele care au 
// pretul sub 100

let productPriceUnderOneHunder = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].price < 100)
    productPriceUnderOneHunder.push(products[i]); 
} 
console.log(productPriceUnderOneHunder);

// Exercitiu 5
// Sa se scrie un algoritm care sa afiseze in consola un array 
// cu toate produsele din categori jewelery care costa peste 200
let productPriceOverTwoHundred = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].category === "jewelery" && products[i].price > 200) {
    productPriceOverTwoHundred.push(products[i]);
  }
} console.log(productPriceOverTwoHundred);

// Exercitiu 6
// Sa se crie un algoritm care afiseaza toate produsele care contin in nume
// cuvantul "premium" 

let productWord = [];

for (let i = 0; i < products.length; i++) {
   if (products[i].title.includes("premium") === true || products[i].description.includes("premium") === true) {
    productWord.push(products[i]);
   }
} console.log(productWord);

// Exercitiu 7
// Sa se crie un algoritm care afiseaza toate produsele care au un rate
// mai mare de 4

let productRate = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].rating.rate >= 4) {
      productRate.push(products[i]);
    }
} console.log(productRate);

