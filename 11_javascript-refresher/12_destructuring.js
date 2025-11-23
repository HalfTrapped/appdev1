const person = {
  name: "Matthew", 
  age: 20 
};

const { name, age } = person;

console.log(name);
console.log(age);


const hobbies = ["Drawing", "Brainstorming"];
const [hobby1, hobby2] = hobbies;

console.log(hobby1);
console.log(hobby2);

function printName(person) {
  console.log(person.name);
}

printName(person);
