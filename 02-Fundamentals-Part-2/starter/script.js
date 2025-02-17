"use strict";

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("ddaasd");

// function logger() {
//   console.log("My name is J");
// }

// logger();

// function fruitProcessor(apple, oranges) {
//   console.log(apple, oranges);
//   const juice = ` juice with ${apple} and ${oranges}`;
//   return juice;
// }

// const apj = fruitProcessor(5, 0);

// console.log(apj);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// console.log(calcAge1(1990));

// //fuction expression
// const cacl2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// console.log(cacl2(1888));

// //arrow function
// const calca3 = (birthYar) => 2037 - birthYar;

// console.log(calca3(1992));

// const yearsUntilRetirment = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const ret = 65 - age;
//   return `${firstName} retires in ${ret}`;
// };

// console.log(yearsUntilRetirment(2000, "jak"));

// function cutFruitPieces(frut) {
//   return frut * 4;
// }

// function fruitProcessor(apple, oranges) {
//   const applePieces = cutFruitPieces(apple);
//   const oragnePices = cutFruitPieces(oranges);
//   console.log(apple, oranges);
//   const juice = ` juice with ${applePieces} and ${oragnePices}`;
//   return juice;
// }

// console.log(fruitProcessor(2, 5));

// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(5, 54, 49);

// function checkWinner(scoreD, scoreK) {
//   if (scoreD > 2 * scoreK) {
//     console.log("dolf wins");
//   } else if (scoreK > 2 * scoreD) {
//     console.log("koal wins");
//   } else {
//     console.log("no");
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const frens = ["Mic", "Steve", "Peter"];
// frens.push("aaa");
// frens.unshift("bbb");
// const pop = frens.pop();

// console.log(pop);
// console.log(frens);

// console.log(frens.indexOf("Steve"));
// console.log(frens.includes("Steve"));
// const years = new Array(22, 3232, 44);

// console.log(frens[0]);
// console.log(frens.length);

// const bill = [125, 555, 44];
// function calcTip(billValue) {
//   const tip =
//     billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
//   return tip;
// }
// const tipv = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// const total = [tipv[0] + bill[0], tipv[1] + bill[1], tipv[2] + bill[2]];
// console.log(tipv);

// console.log(total);

// const jonas = {
//   firstName: "Jakub",
//   lastName: "Ra",
//   birthDay: 2002,
//   jon: "Tes",
//   friends: ["Michael", "peter", "Steven"],
//   hasDriver: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthDay;
//     return this.age;
//   },

//   getSumm: function () {
//     return `${this.firstName}, ${this.calcAge()},${
//       this.hasDriver ? "Yes" : "No"
//     }`;
//   },
// };

// const nameKey = "Name";
// console.log(jonas.age);
// console.log(jonas["first" + nameKey]);

// console.log(jonas.friends.length, jonas.friends[0]);

// console.log(jonas.getSumm());

// const Mark = {
//   fullName: " Mark",
//   mass: 78,
//   heigh: 1.95,

//   calcBmi: function () {
//     this.bmi = this.mass / (this.heigh * this.heigh);
//     return this.bmi;
//   },
// };
// console.log(Mark.bmi);
// Mark.calcBmi();
// console.log(Mark.bmi);

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}`);
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`dice ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

const bills = [2, 295, 176, 440, 37, 105, 10, 1100, 86, 522];
let tips = [];
let totals = [];

function calcTip(billValue) {
  const tip =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  return tip;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

function calcAverage(arr) {
  let sum;
  for (let i = 0; i < arr.length; i++) {
    sum = +arr[i];
  }
  return sum / arr.length;
}

console.log(tips);
console.log(totals);

console.log(calcAverage(totals));
