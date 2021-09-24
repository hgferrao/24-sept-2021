'use strict';
//The call and apply method
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book:function() //same as below
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(555, 'Henry Ferrao');
// lufthansa.book(354, 'Vinay patil');
// // console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'LW',
//   bookings: [],
// };

// const book = lufthansa.book; // storing the book function of luftasa to book variable to use
// //Does not work due to this key for eurowings
// // book(23,'Martin ferrao');
// //Call method
// book.call(eurowings, 23, 'Martin ferrao'); //used call function to point to eurowings
// console.log(eurowings);
// book.call(lufthansa, 28, 'Alex ferrao');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air lines',
//   iataCode: 'LX',
//   bookings: [],
// };
// book.call(swiss, 45, 'Joel fernandes');
// // console.log(swiss);

// //Apply method
// const flightData = [56, 'mary kom'];
// book.apply(swiss, flightData);
// console.log(swiss);

//Bind method

//Function returning another function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey'); //calling function and storing the returned function in a variable
// greeterHey('Henry');
// greeterHey('Vijay');
// //above  code can write in one line
// greet('Hey')('Ratan'); // the second parenthesis is the argument for returned function

//Function calling function using arrow function above example in arrow
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Henry');
// greeterHey('Vijay');
// greet('hiii')('mallu');
//Function accepting call back
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformd by: ${fn.name}`);
// };
// transformer('JavaScript is the best !', upperFirstWord);
// transformer('JavaScript is the best !', oneWord);
// // const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassenger = 1,
//   price = 100 * numPassenger
// ) {
//   //giving default values.we also can give some expression (Ex:price = 100*numPassenger)
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 3);
// createBooking('LH123', 5, 2);
// createBooking('henry', undefined, 5);

//How passing arguments works?
// const flight = 'LH234';
// const henry = {
//   name: 'Henry Ferrao',
//   passport: 637364546,
// };
// const chekIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 637364546) {
//     console.log('Checked in');
//   } else {
//     console.log('Wrong passport');
//   }
// };
// // chekIn(flight, henry);
// // console.log(flight);
// // console.log(henry); // NOTE: Here the object is not same as original after passing it to a function

// // const flightNum = flight; //assigned filght string to filghtnum
// // const passenger = henry; //assigned henry object to passsenger

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };
// newPassport(henry);
// chekIn(flight, henry);
//Exercise for rest parameter
// const sum = function (a, b, ...rest) {
//   console.log(a);
//   console.log(b);
//   console.log(rest);
//   console.log(a + b);
//   console.log(a + b + rest[0]);
// };
// console.log(sum(20, 46, 10, 45, 25));
