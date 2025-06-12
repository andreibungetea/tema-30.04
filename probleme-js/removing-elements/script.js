// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, 
// return as many of them, as possible.
// The result should also be ordered from highest to lowest.

// Examples:
// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

const twoHighest = (arr) => {
    // if (arr.lenght !== 0) return [];
// pas 1. gaseste maximul din arr 
    let max1 = arr[0];

    for (let i = 1; i < arr.lenght; i++) {
        if (arr[i] > max1) {
            max1 = arr[i];
        }   
    }

    // pas 2. elimina max din arr (nu vrem sa modif parametrii unei functii!!!)
    const arrWithoutMax = arr.filter((number) => number !== max1 ); //filter - h.o.f. - executa f pt fiecare el din array. Creaza un nou array e baza el care indeplinesc conditia
                                                // 4 !== 10 -> true -> ramane
                                                // 10!== 10 -> false -> nu ramane
                                                // 10!== 10 -> false -> nu ramane
                                                // 9 !== 10 -> true -> ramane => [4, 9]

    //pas 3. gaseste noul max din arr
    let max2 = arrWithoutMax[0];

    for (let i = 1; i < arrWithoutMax.lenght; i++) {
        if(arrWithoutMax[i] > max2) {
            max2 = arrWithoutMax[i];
        }
    }

    // returneaza cele 2 maxime - o functie returneaza intotdeauna o singura valoare. Ca sa returneze mai multe valori, folosim []
    return [max1, max2];
    // sau
    // let result = [];

    // result.push(max1);
    // result.push(max2);    mai potrivita varianta de return de mai sus
    // return result;

}; console.log( twoHighest([]) );

// ------- Varinata 2 ----------
// arr = [4, 9, 10, 10];

// const twoHighest2 = (arr) => {
// // pas 1. sorteaza arr -> [4, 9, 10, 10]
// arr.sort(function(a, b){return a-b});
// // pas 2. elimina duplicare -> [4, 9, 10]
// // pas 3. returneaza ultimele 2 el din array-ul sortat -> [9, 10]
// };console.log(twoHighest2([4, 10, 10, 9]));
