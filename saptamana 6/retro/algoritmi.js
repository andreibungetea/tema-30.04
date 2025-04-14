// ---Algoritm suma numere in array ---
// let numbers = [5, 3, 32, -2, 107];
// let sum = 0;

// for (let i = 0; i < numbers.length; i ++) {
//     sum += numbers[i];
// }

// media
// let avarage = sum / numbers.length;
// console.log(avarage);

// Exercitiul 1 - varfuri munti

// Algoritm aflare maximul dintr-un array
// let peaks = [1800, 2400, 2000, 3000, 3400];
// //             0     1     2     3     4
// let max = peaks [0]; //1800

// if (peaks[1] > max) {
//     max = peaks[1];
// }

// if (peaks[2] > max) {        varianta nescalabila
//     max = peaks[2];
// }

// if (peaks[3] > max) {
//     max = peaks[3];
// }
// console.log(max);

// -------- Varianta scalabila -------
// for (i = 1; i <  peaks.length; i ++) {
//     if (peaks[i] > max) {
//         max = peaks[i];
//     }
// }

// Algoritm aflare minim intr-in arrey
// let min = peaks[0];

// for (let i = 1; i < peaks.length; i ++) {
//     if (peaks[i] < 1) {
//         min = peaks[i];
//     }
// }

// -----------Algoritm aflare maxim par dintr-un array --------
// Sa se creeze un algoritm care sa afiseze in consola cel mai mare numar par dintr-un array `Cel mai mare numar par este x`
// Daca array-ul nu contine niciun numar par, sa se afiseze "Array-ul nu contine numere pare"

// nu este buna comparatia daca primul numar din array este impar si totodata mai mare decat cel mai mare numar par
// let numbers = [29, 5, 8, 32, -10, 55];
// let max = numbers[0]; 

// for (let i = 1; i < numbers.length; i ++) {
//     if (numbers[i] > max && numbers[i] % 2 === 0) {
//         max = numbers[i];
//     }
// }
// console.log(max);

// varianta Gabi
// let numbers = [41, 5, 8, 32, -11, 55];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) { //5 < -11 -> min = -11; 8 < -11 fals -> min=-11 ...
//         min = numbers[i];
//     }
// }

// let max = min; 

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0 && numbers[i] > max) {
//         max  = numbers[i];
//         }
// } 

// if (max % 2 === 1) {
//     console.log("Array-ul nu contine numere pare");
// } else { 
//     console.log(`Cel mai mare numar par este ${max}`);
// }

// varianta domn' profesor
// let numbers = [41, 5, 8, 32, -10, 55];
// let evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenNumbers.push(numbers[i]);
//     }
// } //console.log(evenNumbers);

// // acum aplicam algoritmul de maxim
// // [8, 32, -10]
// let max = evenNumbers [0];

// for (let i = 1; i < evenNumbers.length; i++) {
//     if (evenNumbers[i] > max) {
//         max = evenNumbers[i];
//     } console.log(evenNumbers[i]);
// }
//  console.log(`Cel mai mare numar par este ${max}`);
// else {
// console.log("Array-ul nu contine numere pare");
// }


// ----------- Algoritm numarare aparitie ---- counter ----
// Exercitiu - sa se afiseze de cate ori apare 0(zer0) in arrray-ul numbers si cate sunt pozitive
// let numbers = [41, 5, 0, 8, 32, -10, 55, 0];
// let counter = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         counter++;
//     }
// } console.log(counter);


// 