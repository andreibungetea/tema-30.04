// ["jo", "nelson", "jurie"] -> ["jo 2", "nelson 6", "jurie 5"]

const nameLength = (names) => {
  const result = [];
  for (let i = 0; i < names.length; i++) {
    names[i].push(names[i] + " " + names[i].length)
  }return result;
};  console.log(nameLength);

const nameLength2 = (names) => {
  return names.map((name) => {
    return name + " " + name.length;
  });
}; console.log(nameLength2);

const nameLength3 = (names) => names.map((name) => name + " " + name.length);
console.log(nameLength3);