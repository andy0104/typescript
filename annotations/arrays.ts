const carMakers: string[] = ['ford', 'toyota', 'tata'];
const myDates = [new Date(), new Date()];

const cars: string[][] = [
  [
    'focus',
    'fiesta'
  ],
  [
    'corolla',
    'camry'
  ],
  [
    'safari',
    'tiago'
  ]
];

// Multi typed arrays
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020-10-11');
importantDates.push(new Date());

// Tuples very similar to array
// Mix and match many data types
// Order of the data value is important in a Tuple

// The drink object is represented in the Tuple but
// without the key names, just the values but in a very specific order
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Creating a specific order of the values for a Tuple with data types
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
