'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';

//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__value">${mov}€</div>
//       </div>
//     `;

//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };

// const eurToUsd = 1.1;

// const movmentsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movmentsUsd);

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(function (name) {
//         return name[0];
//       })
//       .join('');
//   });
// };

// createUsernames(accounts);
// console.log(accounts);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const calcDisplayBalance = function (acc) {
//   const balance = acc.movements.reduce(function (acc, mov) {
//     return acc + mov;
//   }, 0);
//   acc.balance = balance;
//   labelBalance.textContent = `${acc.balance}€`;
// };

// const calcDisplaySummary = function (account) {
//   const incomes = account.movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}€`;

//   const out = account.movements
//     .filter(function (mov) {
//       return mov < 0;
//     })
//     .reduce(function (acc, mov) {
//       return acc + mov;
//     }, 0);
//   labelSumOut.textContent = `${Math.abs(out)}€`;

//   const intrest = account.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * account.interestRate) / 100)
//     .filter((int, i, arr) => {
//       console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${intrest}€`;
// };

// //max value
// const max = movements.reduce(function (acc, mov) {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// let currentAccount;
// btnLogin.addEventListener('click', function (e) {
//   //prevent form from submitting
//   e.preventDefault();
//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     //display UI and message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.style.opacity = 100;
//     inputLoginUsername.value = inputLoginPin.value = '';

//     //clear input fields
//     inputLoginUsername.value = inputLoginPin.value = '';
//     inputLoginPin.blur();

//     calcDisplaySummary(currentAccount);
//     calcDisplayBalance(currentAccount);
//     displayMovements(currentAccount.movements);
//     //update UI
//     // updateUI(currentAccount);
//   }
// });

// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const recieverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value
//   );
//   inputTransferAmount.value = inputTransferTo.value = '';
//   if (
//     amount > 0 &&
//     recieverAcc &&
//     currentAccount.balance >= amount &&
//     recieverAcc?.username !== currentAccount.username
//   ) {
//     currentAccount.movements.push(-amount);
//     recieverAcc.movements.push(amount);
//     calcDisplayBalance(currentAccount.movements);
//     calcDisplaySummary(currentAccount);
//     displayMovements(currentAccount.movements);
//   }
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// function checkDogs(dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice(1, -2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     console.log(
//       `Dog number ${i + 1} is ${
//         dog >= 3 ? 'an adult' : 'a puppy'
//       }, and is ${dog} years old`
//     );
//   });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
// */

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);

//   const adultDogs = humanAges.filter(function (age) {
//     if (age >= 18) return age;
//   }, 0);

//   console.log(adultDogs);

//   const ave = adultDogs.reduce(function (acc, age, i, arr) {
//     return acc + age / arr.length;
//   }, 0);

//   return ave;
// };

// const ave11 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(ave11);
// const ave22 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// // console.log(ave22);

// movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// const calcAverage = function (arr) {
//   const humanAges = arr
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return humanAges;
// };

// const ave = calcAverage([5, 2, 4, 1, 15, 8, 3]);
// console.log(ave);

// const firstWithrowal = movements.find(mov => mov < 0);
// console.log(firstWithrowal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

// const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
// console.log(huskyWeight);
// const dogBothActivities = breeds.find(breed => {
//   return (
//     breed.activities.includes('running') && breed.activities.includes('fetch')
//   );
// });
// console.log(dogBothActivities);
// const allActivities = breeds
//   .flatMap(breed => breed.activities)
//   .reduce((acc, act) => acc + act, 0);
// console.log(allActivities);
// const uniqueActivities = [...new Set(allActivities)];

// const swimmingAdjacent = breeds
//   .flatMap(breed => breed.activities)
//   .filter(act => act !== 'swimming');
// console.log(swimmingAdjacent);

// const allBreeds = breeds.every(breed => breed.averageWeight >= 10);
// console.log(allBreeds);

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array 
(We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:

*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(element => {
  element.recFood = Math.trunc(element.weight ** 0.75 * 28);
});

console.log(dogs);

dogs.forEach(element => {
  if (element.owners.includes('Sarah')) {
    if (element.curFood > element.recFood) {
      console.log('Sarahs dog is eating too much');
    } else {
      console.log('Sarahs dog is eating too little');
    }
  }
});

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

const ownersTooMuch = dogs.filter(dog => dog.curFood > dog.recFood);
console.log(ownersTooMuch);
const namesTooMuch = ownersTooMuch.flatMap(dog => dog.owners);
console.log(namesTooMuch);
console.log(`${namesTooMuch.join(' and ')}'s dogs eat too much `);

const ownersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood);
console.log(ownersTooLittle);
const namesTooLittle = ownersTooLittle.flatMap(dog => dog.owners);
console.log(namesTooLittle);
console.log(`${namesTooLittle.join(' and ')}'s dogs eat too little `);

dogs.forEach(element => {
  if (element.curFood === element.recFood) {
    console.log('true');
  }
});

const okay = dogs.some(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(okay);

const okayDogs = dogs.filter(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(okayDogs);

const docGroupedByPortion = Object.groupBy(dogs, dog => {
  if (dog.curFood > dog.recFood) return 'too-much';
  if (dog.curFood < dog.recFood) return 'too-little';
  if (dog.curFood === dog.recFood) return 'exact';
});
console.log(docGroupedByPortion);

const dogsGroupedByOwners = Object.groupBy(dogs, dog => {
  return `${dog.owners.length}`;
});
console.log(dogsGroupedByOwners);

const dogsSorted = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
