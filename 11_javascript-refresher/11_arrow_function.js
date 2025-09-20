function greet(name) {
  return "Hello, " + name;
}

const greetArrow = (name) => {
    return "Hello, " + name
}

const greetShort = name => "Hello, " + name

console.log(greet("Matthew"))
console.log(greetArrow("Matthew"))
console.log(greetShort("Matthew"))

function square(n) {
  return n * n;
}

const squareArrow = n => {
    return n * n
}

const squareShort = n => n * n

console.log(square(5))
console.log(squareArrow(5))
console.log(squareShort(5))

function sayHi() {
  console.log("Hi!");
}

const sayHiArrow = () => {
    console.log("Hi!")
}

const sayHiShort = () => console.log("Hi!")

console.log(sayHi())    
console.log(sayHiArrow())
console.log(sayHiShort())