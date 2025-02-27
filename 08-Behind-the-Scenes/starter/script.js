'use strict';

// function caclAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   function printAge() {
//     let outout = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(outout);

//     if (birthYear >= 1981 && birthYear <= 1980) {
//       const firstName = 'Steven';
//       const str = ` ${firstName}  is a millenial`;
//       var millenial = true;
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     outout = 'NEW OUTPUT!';

//     console.log(millenial);
//     console.log(outout);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// caclAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// addArrow(2, 2);

// function adddecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeAaa = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeAaa(1991);

const jonas = {
  year: 19991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();
