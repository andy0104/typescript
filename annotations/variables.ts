
// Type annotations
let apple: number = 5;

// Type inference
let age = 20;

let speed: string = 'fast';
let hasName: boolean = false;

let nothingMuch: null = null;

// built in object
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: {x: number, y: number} = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const add = (a: number, b: number): number => {
  return a + b;
};

// When to use annotations
// 1) Function that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

// Delayed initialisation
// 2) When we declare a variable to initialise it later
let words = ['red', 'blue', 'green'];
let foundWord; // Solution: let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose value cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

// Object de-structuring
const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0.10,
    lng: 21.19
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, name }: {age: number, name: string} = profile;
const { coords: { lat, lng }}: {coords: {lat: number, lng: number}} = profile;

