//basic operators
//task_1
let x = 8,
  y = 4;
console.log('Sum:', x, '+', y, '=', x + y);
console.log('Difference:', x, '-', y, '=', x - y);
console.log('Product:', x, '*', y, '=', x * y);
console.log('Quotient:', x, '/', y, '=', x / y);
console.log('-----------------------');

//task_2
let counter = 10;
console.log('Counter + 1:', ++counter);
console.log('Counter - 1:', --counter);
console.log('-----------------------');

//task_3
let num = 5;
num += 3;
num -= 2;
console.log('Num result:', num);
console.log('-----------------------');

//Math
//task_1
let price = 19.99;
console.log('Rounded price:', Math.round(price));
console.log('-----------------------');

//task_2
let base = 3,
  exponent = 4;
console.log('Power:', base, '^', exponent, '=', Math.pow(base, exponent));
console.log('-----------------------');

//task_3
let a = 5,
  b = 9,
  c = 3;
console.log('Min:', Math.min(a, b, c));
console.log('Max:', Math.max(a, b, c));
console.log('-----------------------');

//comparison operator
//task_1
let a_2 = 10,
  b_2 = 20;
console.log(a_2, '>=', b_2, ':', a_2 >= b_2);
console.log('-----------------------');

//task_2
let firstName = 'John',
  lastName = 'John';
console.log(firstName, '===', lastName, ':', firstName === lastName);
console.log('-----------------------');

let num_2 = 0,
  str = '';
console.log(num_2, '==', 'empty str', ':', num_2 == str);
console.log(
  'Пустая строка равна нулю, так как операнды разных типов преобразуются оператором == к числу. Таким образом пустая строка становятся нулём и равна нулю.'
);
console.log('-----------------------');

//task_3
let age = 18;
console.log(age, '!==', '21', ':', age != 21);
console.log('-----------------------');

//boolean operator
//task_1
let isAdult = true,
  hasID = false;
console.log('Is adult and has ID:', isAdult && hasID == true);
console.log('-----------------------');

//task_2
let isMember = false,
  isGuest = true;
console.log('Is member or is guest:', isMember || isGuest == true);
console.log('-----------------------');

//task_3
let isOnline = true;
console.log('Is not online:', !isOnline);
console.log('-----------------------');
