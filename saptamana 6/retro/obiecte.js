// let name = "Alice";

// for (let i = 0; i < users.length; i++) {
//     if (users[i].name === "Alice"){
//         counter++;
//     }
// } console.log(counter);

// magazinConstructii [
//      numarMagazin = 4,
//      denumireMagazin = "Magazinul tau de constructii",
//      isOpen = true,
//      adresa [
//         street = "Sos Ploiesti",
//         streetNumber = 4,
//         town = "Ploiesti",
//      ]
// ],

let peaks = [1800, 2300, 1500, 3200, 5400, 1020, 2119];
// let max = peaks[0];

// for (let i = 1; i <peaks.length; i++) {
//     if (peaks[i] > max) {
//         max = peaks[i];
//     }
// } console.log(max);

min = peaks[0];

for (let i = 1; i <peaks[i]; i++) {
    if (peaks[i] < min) {
        min = peaks[i];
    }
}console.log(min);

let numbers = [10, 24, 0, 53, -94, 27, 0, 13, 12];
let users = ["Alice", "Benjamin", "Alice", "Cosma"];
let evenNumbers = [];
let counter = 0;

for  (let i = 0; i < users.length; i ++)
    if (users[i] === "Alice") {
        counter++;
    } console.log(counter);

// for  (let i = 0; i < numbers.length; i ++) {
//     if (numbers[i] % 2 === 0) {
//         evenNumbers.push(numbers[i]);
//     }
// }  

// let max = evenNumbers[0];
// for (let i = 1; i <evenNumbers.length; i++) {
//     if (evenNumbers[i] > max) {
//         max = evenNumbers[i];
//     }
// } console.log(max);
// let mim = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i]
//     }
// } 
// let max = min;

// for (let i = 0; i < numbers.length; i ++) {
//     if (numbers[i] > max && numbers[i] % 2 === 1) {
//         max = numbers[i];
//     }
// } console.log(max);
//     if (numbers[i] > max && numbers[i] % 2 === 0) {
//         max = numbers[i];
//         console.log(`Cel mai mare numar par este ${max}`);
//     } 
//     else    {
//     console.log("Array-ul nu contine numere pare");
//     }
// }


let cartProduct = [
    {
        name: "Laptop",
        price: 5000,
        quantity: 1,
    },
    {
        name: "Whiskey",
        price: 200,
        quantity: 3,
    },
    {
        name: "Vin",
        price: 100,
        quantity: 2,
    },
];

let sum = 0;

for (let i = 0; i < cartProduct.length; i++) {
   sum += cartProduct[].price * cartProduct[i].quantity;
 } console.log(sum);