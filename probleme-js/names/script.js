// Create a function that accepts an array of names, and returns an array of each name with its first letter 
// capitalized and the remainder in lowercase
// Varianta 1
// const capMe = (names) => {
//     let result = [];

//     for (let i = 0; i < names.lenght - 1; i++) {
//         const name = names[i];
//         const formatedName = name[0].toUpperCase + name.substring(1, name.lenght - 1).toLoweCase;
//         result.push(formatedName);
//     } return result;
// }; console.log(capMe(["jo", "nelson", "jurie"]));

// Varianta 2
// function capMe(names) {
//   let newArray = [];
//   names.forEach((name) => {
//    newArray.push(name[0].toUpperCase() + name.slice(1).toLowerCase()); 
//   })
//   return newArray
// };

// Varianta 3
const cap3 = (names) => {
    return names.map((name) => {
    return name[0].toUpperCase() + name.slice(1).toLoweCase();
    });
};
console.log(capMe(["jo", "nelson", "jurie"]));