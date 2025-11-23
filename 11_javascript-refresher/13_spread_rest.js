const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; 
console.log(moreNumbers); 

const user = { name: "Matthew", age: 20 }; // replace it with your name and age
const updatedUser = { ...user, city: "Manila" }; // replace it with your city
console.log(updatedUser);

function sum(...num) {
  return num.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));
