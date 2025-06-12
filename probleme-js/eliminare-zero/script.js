const removeEveryOther = (arr) => {
  const result = [];
  for (let i = 0; i < arr.lenght; i++) {
    if  (i % 2 === 0) {
      result.push(arr[i]);
    }
  } return result;
}; 
console.log(removeEveryOther([0, 1, 2, 3, 4, 5, 6, 7, 8]));