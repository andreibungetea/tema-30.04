// Sa se creeze o functie care primeste ca parametru un array 
//  const removeZeros = (numbers) => {

//     let result = "";

//     for (let i = 0; i < numbers.lenght; i++) {
//         if (numbers[i] !== 0) {
//             result += numbers[i];
//         }
//     } return result;
// };

// removeZeros;


const removeZeros = (numbers) => {
    return numbers.filter(numbers => numbers !== 0);
}
console.log(removeZeros[4, 0, 7, 8, 0]);

// rezolvare
 const removeZeros = (numbers) => {

    let result = "";

    for (let i = 0; i < numbers.lenght; i++) {
        if (numbers[i] !== 0) {
            result.push(numbers[i]);
        }
    } return result;
};


