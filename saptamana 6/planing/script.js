// -- For loop ---

// Fiecare for loop are 3 zone:
// 1. Initializare - este executata o sigura data inainte de inceperea forului;
// 2. conditie - este executate inainte de fiecare repetitie / iteratie;
// daca conditia este adevarata atunci se va executa conditia din acoladele for-ului
// daca conditia este falsa atunci se incheie executia intregului for
// 3. increment / decrement - este executata dupa fiecare repetitie / iteratie 
// se creeaza si se memoreaza o variabila i cu valoarea 0: let i = 0  --> zona de initializare
//  care este executate inainte de fiecare conditie si iteratie: i < 4; Aici se face comparatia - clg o singura data (avem o sg linie de cod)
// console.log("start...")

for (let i = 0; i < 4; i++) {
        console.log(`Loop ${i}`);
}
console.log("finish");

let y = 4; 

if (y % 2 === 0) {
    console.log("y este divizibil cu 2");
}

let x = 20;
for (let i = 0; i < 21; i++) {
    // console.log(i);
    
    
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

// let sum = 0;
let prod = 1;

for (let i = 1; i <= 10; i++) {
    prod *= i;
} console.log(prod);


// i = 0 -> 0 < 4 true => i++ = 1;
// i = 1 -> 1 < 4 true => i++ = 2;
// i = 2 -> 2 < 4 true => i++ = 3; 
// i = 3 -> 3 < 4 true => i++ = 4;
// i = 4 -> 4 < 4 false  - forul se opreste.

//  Apoi avem zona de iteratie i++

// Repetitia 1: i = 0 --> i < 4 (true) --> clg --> i ++
// Repetitia 2: i = 1 --> 1 < 4 (true) --> clg --> i ++
// Repetitia 3: i = 2 --> 2 < 4 (true) --> clg --> i ++
// Repetitia 4: i = 3 --> 3 < 4 (true) --> clg --> i ++
// Repetitia 5: i = 4 --> 4 < 4 (false) --> aici se opreste executia for-ului si se trece la urmatoarea linie de cod din afara for-ului

// let x = 5; 
x -= 1;
x++;
console.log(x);

// 0 1 2 3
for (let i = 0; i < 4; i ++) {
    console.log(i);
} 

// Loop 1 Loop 2 Loop 3 Loop 4
for (let i = 0; i < 4; i ++) {
    console.log(`Loop ${i}`);
} 

console.log("finish");

//shortcuts pt calcule
// let x = 5;
// varianta 1
// x = x + 1;
// varanta 2
// x += 1;
// x *= 3;
// varianta 3
// x ++;

// console.log(x);

// Teorema impartirii cu rest

// 7 : 3 = 2 rest 1
// 14 : 5 = 2 rest 4
// 10 : 5 = 2 rest 0
// 1 : 0 = 0 rest 1
// 1 : 3 = 0 rest 1
//  In JS avem nevoie sa stim daca un nr este divizibil cu alt nr

// Exercitiul 1 - sa se afiseze o variabila y care contine un numar. 
// Sa se afiseze in consola "y divizibil cu 2" daca este divizibil cu 2

// mod (%) - operator aritmetic. Face impartirea si afiseaza restul    
// let y = 11;

if (y % 2 === 0) {
    console.log("y divizibil cu 2");
}

for (let i = 0; i < 11; i ++) {
    console.log(i);
}

for (let i = 0; i <= 10; i ++) {
    if (i % 2 === 0)
        console.log(i);
}

for (let i = 0; i <= 10; i ++) {
    if (i % 2 === 1)
        console.log(i);
}

for (let i = 0; i < 21; i ++) {
    if (i % 2 === 0 && i % 3 === 0)
        console.log(i);
}

for (let i = 0; i < 16; i++)
    if (i % 3 === 0) {
        console.log(i);
    }


// Exercitiul 2 - Folosind un for sa se afiseze toate numerele de la 0 la 10
for (let i = 0; i < 11; i ++) {
    console.log(i);
} 

// Exercitiul 2 - Folosind un for sa se afiseze toate numerele multipli de 2 (pare) de la 0 la 10
for (let i = 0; i < 11; i ++) {
    if (i % 2 === 0) {
    console.log(i);
    } 
}

// Exercitiul 3 - Folosind un for sa se afiseze toate numerele impare de la 0 la 10
for (let i = 0; i < 11; i ++){
    if (i % 2 === 1) {
        console.log(i);
    }
}

// Exercitiul 4 - Folosind un for sa se afiseze toate numerele multipli de 2 (pare) si de 3 de la 0 la 20
for (let i = 0; i < 21; i ++){
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
    }
}
// 2 : 2 = 1 rest 0
// if ( 0 === 0 (true) && 2 % 3 === 0 (false) ) -> false si nu se da csg de i. E bine pt ca vrem sa se afiseze si multipli de 3.
// Daca punem cu || se vor afisa doar multipli de 2

for (i = 0; i < 16; i ++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}

// Algoritm pt calcularea sumei unui sir de numere de la 0 la 10 --- SUM (+) ---


 // Algoritm pt calcularea produsului unui sir de numere de la 0 la 10 --- PROD (*) ---
//  let prod = 1;

// for (let i = 1; i < 11; i ++) 
//     prod *= i;
//  console.log(prod);

// let numbers = [5, 3, 32, -2, 107];


//     console.log(numbers[4]);
//     numbers.push(18);
// console.log(numbers);

// let shoppingList = ["apa", 'lapte', "alune"];
// console.log(shoppingList);
// shoppingList.push('lame de ras');
// shoppingList.push( 'bere neagra');
// console.log(shoppingList);

// let shoppingList = ["lapte", "faina", "apa", "paste"];
// shoppingList.push("piper", "sare"); 
// console.log(shoppingList);

// let myName = "BungeteaAndrei";
// console.log(myName.length);

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum =+ numbers[i];
// } console.log(sum);
let numbers = [5, 3, 32, -2, 107];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] >= 0) {
        sum += numbers[i];
    }
} console.log(sum);


// for (let i = 1; i < 11; i ++) {
//     sum += i;  // 0 + 1 + 2 + 3 + 4 .... + 10
// }
// console.log(sum);

// Algoritm pt calcularea prosusului unui sir de numere

// let prod = 1;

// for (let i = 1; i < 11; i ++) {
//     prod *= i;  // 0 * 1 * 2 * 3 * 4 .... * 10
// }
// console.log(prod);

// -----  Array ----


// Q: Ce este un array?
// A: este un tip de data din JavaScript

// Q: Cum putem privi in array?
// A: ca pe o lista de elemente

// Q: Ce contine un array?
// A: este format din zero sau mai multe elemente, iar fiecare element contine o valuare.
// La nivel de valori, un array poate contine orice tip de data ( numbers, strig, boolean )

// Q: Cum poti accesa un element dintrun array?
// A: Poti accesa printr-un index (pe baza index-ului)
// formula: console.log(index[1]);

// Q: Cum poti adauga un element intr-un index?
// A: folosind un push
// formula: numestring.push
//          console.log(numestring);
// ex: number.push(20);

// Exercitiu: sa se creeze un array care contine o lista de cumparaturi. Fiecare lucru de cumparat o sa fie un string
// Sa se dea push la alte 2 elemente noi

// let list = ["margele", "foi lica", "pepene"];
// list.push("mamaliga", "fasole");
// console.log(list);

// ------  Algoritmi pt array-uri ------
// let numbers = [5, 3, 32, -2, 107];
// index       0  1  2   3    4
// index    5

// let i = 0 --> pentru ca index-ul porneste de la 0(zero) intr-un array
// i < numbers.lenght --> pentru ca mereu ultimul index dintr-un array este mai mic cu 1 decat lungimea array-ului. 
// i ++ --> pentru ca vrem sa mergem din index in index
 
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 0)
//     sum += numbers[i];
// } console.log(sum);

// numbers.push(18);

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//     }
//     console.log(numbers[i]);
// }

// i = 0   ->     i < 5 (true)  ->  i < number.lenght[i]    - >   i ++
// 0 corespondent\i < L array-ului\ i < 5 - 5 este corespondetul\ i creste
// in array      \ =>  adevarat   \index-ului situat la 0 in array\ cu 1
// i = 0 -> i < 5 (true) - > sum += 5 -> i++
// i = 1 -> i < 5 (true) -> sum += 3 -> i++
// i = 2 -> i < 5 (true) -> sum += 32 -> i++
// i = 3 -> i < 5 (true) -> sum += -2 -> i++
// i = 4 -> i < 5 (true) -> sum += 107 -> i++
// i = 5 -> i < 5 (false) -- se opreste for-ul


// Exercitiu: suma numerelor pare dintr-un array
// let sum = 0;
// for (let i = 0; i < numbers.length; i ++) {
//     if (numbers[i] % 2 === 0) {
//         sum += numbers[i];
//     }
// }

// Exercitiu: suma numerelor pozitive dintr-un array
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 0) { 
//         sum += numbers[i];
//     }
// }

// // Practic trebuie afisat numarul, apoi, tot in acelasi string, daca este par sau nu.
// for (let i = 0; i < 11; i ++) {
//     if (i % 2 === 0) { 
//     console.log(`${i} - par`);
//     } else 
//         if (i % 2 === 1) {
//             console.log(`${i} - impar`);
//         }
// }


// // 4.sa se creeze un array cu numere. folosind un for loop sa se calculeze suma numerelor impare
// // let numbers = [1, 5, 8, 13, 18, 24];
// let sum = 0;

// for (let i = 0; i < numbers.length; i ++) {
//     if (i % 2 === 1) { 
//        sum += numbers[i]; 
//     } 
// }
// console.log(sum);

// // 5.sa se creeze un array cu numere. folosind un for loop sa se calculeze suma numerelor pare pozitive
// // let numbers = [1, 5, -4 , 8, 13, -17, 18, 24];
// let sum = 0;

// for (let i = 0; i < numbers.length; i ++) {
//     if (i % 2 === 0 && i >= 0) { 
//         sum += numbers[i];
//     } 
// }
// console.log(sum);


