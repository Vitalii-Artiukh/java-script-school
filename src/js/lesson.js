// function checkStorage(available, ordered) {
//   if (available < ordered) {
//     console.log("Not enough goods in stock!");
//     return "Not enough goods in stock!";
//   } else {
//     console.log("Order is processed, our manager will contact you");
//     return "Order is processed, our manager will contact you";
//   }
// }

// checkStorage(10, 15);
// checkStorage(20, 15);

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     console.log("There are no products in the order!");
//     return "There are no products in the order!";
//   } else if (ordered > available) {
//     console.log(
//       "Your order is too large, there are not enough items in stock!"
//     );
//     return "Your order is too large, there are not enough items in stock!";
//   } else {
//     console.log("The order is accepted, our manager will contact you");
//     return "The order is accepted, our manager will contact you";
//   }
// }

// checkStorage(10, 0);

//////////////////////////////////////////

// const age = 17;
// const type = age >= 18 ? "adult" : "child";
// console.log(type);

/////////////////////////////////////////

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   console.log(correctPassword === password);
//   return correctPassword === password
//     ? "Access granted"
//     : "Access denied, wrong password!";
// }

// checkPassword("jqueryismyjam");

////////////////////////////////////||

// const day = 8;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("This is a working day");
//     break;
//   case 6:
//   case 7:
//     console.log("It is a day off");
//     break;
//   default:
//     console.log("Invalid");
// }

///////////////////////////////////////////////

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       console.log(0);
//       return 0;
//       break;

//     case "professional":
//       console.log(20);
//       return 20;
//       break;

//     case "organization":
//       console.log(50);
//       return 50;
//       break;

//     default:
//       console.log("Invalid subscription type!");
//       return "Invalid subscription type!";
//   }
// }

// getSubscriptionPrice("ccc");

///////////////////////////////////////

// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//     console.log(number + "true");
//     return true;
//   } else {
//     console.log(number + "false");
//     return false;
//   }
// }

// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 9);
// isNumberInRange(20, 50, 24);
// isNumberInRange(10, 30, 76);

///////////////////////////////////////

// function checkAccess(subType) {
//   if (subType === "pro" || subType === "vip") {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// }

// checkAccess("pro");
// checkAccess("starter");
// checkAccess("vip");
// checkAccess("free");

///////////////////////////////////

// function toggleModalVisibility(isVisible) {
//   console.log(!isVisible);
//   return !isVisible;
// }

// toggleModalVisibility(true);
// toggleModalVisibility(false);

////////////////////////////////////

// function getSubstring(string, length) {
//   console.log(string.slice(0, length));
//   return string.slice(0, length);
// }

// getSubstring("Hello world", 3);
// getSubstring("Hello world", 5);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);

/////////////////////////////////////

// function normalizeInput(input, to) {
//   if (to === "upper") {
//     console.log(input.toUpperCase());
//     return input.toUpperCase();
//   } else {
//     console.log(input.toLowerCase());
//     return input.toLowerCase();
//   }
// }

// normalizeInput("This ISN'T SpaM", "lower");
// normalizeInput("This ISN'T SpaM", "upper");
// normalizeInput("Big SALE", "lower");
// normalizeInput("Big SALE", "upper");
// normalizeInput("Stay Awhile and Listen", "lower");
// normalizeInput("Stay Awhile and Listen", "upper");

///////////////////////////////////////

// function checkForName(fullName, firstName) {
//   const lowerFull = fullName.toLowerCase();
//   const lowerFirst = firstName.toLowerCase();
//   if (lowerFull.includes(lowerFirst)) {
//     console.log(true);
//     return true;
//   } else {
//     return false;
//   }
// }

// checkForName("Jason Neis", "Jason");
// checkForName("Jason Neis", "jAsOn");
// checkForName("Jason Neis", "Jacob");
// checkForName("Caty Stars", "Caty");
// checkForName("Caty Stars", "cAtY");
// checkForName("Caty Stars", "Andromeda");

/////////////////////////////////

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     console.log("Yes");
//     return "File extension matches";
//   } else {
//     console.log("No");
//     return "File extension does not match";
//   }
// }

// checkFileExtension("styles.css", ".css");
// checkFileExtension("styles.css", ".js");
// checkFileExtension("app.js", ".js");
// checkFileExtension("app.js", ".html");
// checkFileExtension("index.html", ".html");
// checkFileExtension("index.html", ".css");
// checkFileExtension("index.html", ".js");

////////////////////////////////////////////

// function getFileName(file) {
//   const fileDot = file.indexOf(".");
//   if (fileDot >= 0) {
//     file.slice(0, fileDot);
//     console.log(file.slice(0, fileDot));
//     return file.slice(0, fileDot);
//   } else {
//     console.log(file);
//     return file;
//   }
// }

// getFileName("styles.css");
// getFileName("app.js");
// getFileName("app");
// getFileName("index.js");
// getFileName("index.html");
// getFileName("index.css");
// getFileName("index");

//////////////////////////////////////

// function createFileName(name, ext) {
//   console.log(`${name.trim()}.${ext}`);
//   return `${name.trim()}.${ext}`;
// }

// createFileName(" order ", "txt");
// createFileName("report ", "csv");
// createFileName(" presentation", "xml");

////////////////////////////////

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 4;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// function calculateTotal(number) {
//   let maxNumber = 0;
//   let summ = 0;
//   while (maxNumber < number) {
//     maxNumber += 1;
//     summ += maxNumber;
//   }
//   console.log(summ);
//   return summ;
// }

// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(0);
// calculateTotal(18);
// calculateTotal(24);
// calculateTotal(20);

///////////////////////////////

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   let summ = 0;
//   for (let maxNumber = 0; maxNumber <= number; maxNumber++) {
//     summ += maxNumber;
//   }
//   console.log(summ);
//   return summ;
// }

// calculateTotal(1);
// calculateTotal(0);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);

////////////////////////////////////////

// function calculateEvenTotal(number) {
//   let summ = 0;
//   for (let maxNumber = 2; maxNumber <= number; maxNumber += 2) {
//     summ += maxNumber;
//   }
//   console.log(summ);
//   return summ;
// }

// calculateEvenTotal(1);
// calculateEvenTotal(3);
// calculateEvenTotal(7);
// calculateEvenTotal(18);
// calculateEvenTotal(27);

//////////////////////////////////

// const start = 6;
// const end = 25;
// let number;

// for (number = start; number < end; number++) {
//   if ((number > start, number < end, number % 5 === 0)) {
//     console.log(number);
//     break;
//   }
// }

///////////////////////////////////

// function findNumberFromFive(max, target) {
//   console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number ${target}, interrupt the cycle`);
//       break;
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumberFromFive(10, 6);
// console.log("Log after exiting function");

//////////////////////////////////

// function findNumber(start, end, divisor) {
//   for (let number = start; number < end; number++) {
//     if ((number > start, number < end, number % divisor === 0)) {
//       console.log(number);
//       return number;
//     }
//   }
// }

// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);

///////////////////////////////////

// function getOrderQuantity(order) {
//   console.log(order.length);
//   return order.length;
// }

// getOrderQuantity(['apple', 'peach', 'pear', 'banana']);
// getOrderQuantity(['apple', 'banana']);
// getOrderQuantity(['apple', 'banana', 'pear']);
// getOrderQuantity([]);

/////////////////////////////////////

// function getLastElementMeta(array) {
//   // const lastElementNumber = array.length - 1;
//   // console.log([array.length - 1, array[array.length - 1]]);
//   return [array.length - 1, array[array.length - 1]];
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
// console.log(getLastElementMeta(['apple', 'peach', 'pear']));
// console.log(getLastElementMeta(['apple', 'peach']));
// console.log(getLastElementMeta(['apple']));

////////////////////////////////////////

// function getExtremeElements(array) {
//   // const lastElementNumber = array.length - 1;
//   console.log([array[0], array[array.length - 1]]);
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

/////////////////////////////////////////

// const a = ['mango', 'poly'];
// const b = a;

// a[0] = 'jacobs';
// b[1] = 'turrel';

// console.log(a);
// console.log(b);

/////////////////////////////////////////////

// function getLength(array) {
//   const string = array.join('');
// console.log(array.join('').length);
//   console.log(string);
//   return array.join('').length;
// }

// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train'])); //22
// console.log(getLength(['M', 'a', 'n', 'g', 'o'])); //5
// console.log(getLength(['top', 'picks', 'for', 'you'])); //14

////////////////////////////////

// function calculateEngravingPrice(message, pricePerWord) {
//   console.log(message.split(' ').length * pricePerWord);
//   return message.split(' ').length * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

////////////////////////////////

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//////////////////////////////////////

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

//////////////////////////////////////

// function getSlice(array, value) {
//   // const arrayNumber = array.indexOf(value);
//   console.log(array.slice(0, array.indexOf(value) + 1));
//   return array.slice(0, array.indexOf(value) + 1);
// }

// getSlice(['Mango', 'Poly', 'Ajax'], 'Poly');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Mango');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Casey');

//////////////////////////////////////////

// function createArrayOfNumbers(min, max) {
//   const number = [];
//   for (let field = min; field <= max; field++) {
//     number.push(field);
//   }
//   console.log(number);
//   return number;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

///////////////////////////////////////

// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

///////////////////////////////////

// function calculateTotalPrice(order) {
//   let summ = 0;
//   for (let number = 0; number < order.length; number++) {
//     summ = summ + order[number];
//   }
//   console.log(summ);
//   return summ;
// }

// calculateTotalPrice([12, 85, 37, 4]); //138
// calculateTotalPrice([164, 48, 291]); //503
// calculateTotalPrice([412, 371, 94, 63, 176]); //1116

/////////////////////////////////////

// function getEvenNumbers(start, end) {
//   let array = [];
//   for (let number = start; number <= end; number++) {
//     if (number % 2 === 0) {
//       array.push(number);
//     }
//   }
//   console.log(array);
//   return array;
// }

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

///////////////////////////////////

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     console.log(`${item.toLowerCase()} is available to order!`);
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     console.log('Sorry! We are out of stock!');
//     return 'Sorry! We are out of stock!';
//   }
// }

// checkStorage(['apple', 'plum', 'pear'], 'plum');
// checkStorage(['apple', 'plum', 'pear'], 'pLuM');
// checkStorage(['apple', 'plum', 'pear'], 'pear');
// checkStorage(['apple', 'plum', 'pear'], 'pEAr');
// checkStorage(['apple', 'plum', 'pear'], 'orange');
// checkStorage(['apple', 'plum', 'pear'], 'carrot');

////////////////////////////////////////////////

// function getCommonElements(array1, array2) {
//   let result1 = [];
//   let result2 = [];
//   for (let index = 0; index < array1.length; index++) {
//     // metod 1
//     if (array2.includes(array1[index])) {
//       result1.push(array1[index]);
//     }
//     // metod 2
//     array2.includes(array1[index]) ? result2.push(array1[index]) : 'No';
//   }
//   // metod 2
//   console.log(result2);
//   // metod 1
//   return result1;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

///////////////////////////////////////////

// const numbers = [-94, 87, 12, 0, -67, 32];
// const maxValue = Math.max.apply(null, numbers);

// console.log(maxValue);

///////////////////////////////////

// Функція для визначення типу змінної:
// Написати функцію для визначення типу змінної.
// Функція отримує будь-яке значення в якості аргументу
// і визначає тип цієї змінної. Виводить в консоль
// повідомлення `Тип змінної: type`

// function typeVariable(variable) {
//   return `Тип змінної ${typeof variable}`;
// }

// console.log(typeVariable(true));
// console.log(typeVariable(5));
// console.log(typeVariable('true'));

/////////////////////////////////////

// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
// яка перевіряє, чи покупець має право на знижку.
// І повертає true - якщо має право на знижку і false, якщо - ні.
// Покупець має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця;
// isStudent - буль (вказує чи є покупець студентом);
// isPensioner - буль  (вказує чи є покупець пенсіонером);

// function hasDiscount(age) {
//   if (age >= 12 && age <= 18) {
//     return 'is Skool';
//   } else if (age >= 60) {
//     return 'is Pensioner';
//   } else if (age > 25 && age < 60) {
//     return 'is Worker';
//   } else {
//     return 'is Student';
//   }
// }

// console.log(hasDiscount(45));
// console.log(hasDiscount(75));
// console.log(hasDiscount(14));
// console.log(hasDiscount(25));

/////////////////////////////////////

// function calculateTotalPrice(order) {
//   let summ = 0;
//   for (const number of order) {
//     summ = summ + number;
//   }
//   return summ;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

///////////////////////////////////////

// function createReversedArray() {
//   const array1 = Array.from(arguments);
//   console.log(array1.toReversed());
//   return array1.toReversed();
// }

// createReversedArray(12, 85, 37, 4);
// createReversedArray(164, 48, 291);
// createReversedArray(412, 371, 94, 63, 176);
// createReversedArray();

/////////////////////////////////////

// const calculateTax = function (amount, taxRate = 0.2) {
//   console.log(amount * taxRate);
//   return amount * taxRate;
// };

// calculateTax(100, 0.1);
// calculateTax(200, 0.1);
// calculateTax(100, 0.2);
// calculateTax(200, 0.2);
// calculateTax(100, 0.3);
// calculateTax(200, 0.3);
// calculateTax(100);
// calculateTax(200);

//////////////////////////////////////////

// arguments;
// const foo = function () {
//   const args = Array.from(arguments);

//   console.log(arguments);

//   args.push(100);

//   console.log(args);

//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[arguments.length - 1]);
// };

// foo(10, 'Hello', true, 20, 'nono');

//////////////////////////////////////////

// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

// const checkString = function (value) {
//   if (typeof value === 'string' && !value.includes('$')) {
//     return value.length;
//   } else {
//     return 'Не вірний ввід';
//   }
// };

// console.log(checkString('Vitalii'));
// console.log(checkString(25));
// console.log(checkString('Boria$386'));

//////////////////////////////////////////////////////////

// Оголоси функцію isEvenNumber(number), яка перевіряє
// (за допомогою тернарного оператору) чи отримане значення
// є парним числом і виводить відповідне повідомлення
// "Число парне" або "Число непарне"
// Якщо функція отримує не число вивести повідомлення
// "Невалідне значення"

// const isEvenNumber = function (value) {
//   let message =
//     value % 2 === 0 && typeof value === 'number'
//       ? 'Число парне'
//       : value % 2 !== 0 && typeof value === 'number'
//       ? 'Число непарне'
//       : 'Невалідне значення';
//   console.log(message);
// };

// isEvenNumber(25);
// isEvenNumber(10);
// isEvenNumber('24');
// isEvenNumber('25');
// isEvenNumber(true);

/////////////////////////////////////

// Оголоси функцію calculateSquare(value).
// Функція має перевіряти чи є отримане значення - число
// або за можливості перетворити рядок на число
// Якщо це число функція возводить число у квадрат і виводить рядок
// `The square of ${numberValue} is ${squaredNumber}`
// numberValue - отримане число або перетворене з рядка число.
// squaredNumber - numberValue у квадраті.
// Якщо значення не є числом, функція повертає рядок 'Invalid input!'.

// const calculateSquare = function (value) {
//   const numberValue = parseFloat(value);
//   if (isNaN(numberValue)) {
//     console.log('Invalid input!');
//     console.log(isNaN(numberValue));
//   } else {
//     const squaredNumber = numberValue ** 2;
//     console.log(`The square of ${numberValue} is ${squaredNumber}`);
//   }
// };

// calculateSquare(25);
// calculateSquare('35.35');
// calculateSquare('vngh');

/////////////////////////////////////////////////

// Напишіть функцію, яка приймає аргумент і визначає його тип даних.
// Якщо тип - строка, функція повертає "string", якщо число - "number",
// в іншому випадку - "unknown".

// const argType = function (argument) {
//   let arg =
//     typeof argument === 'string'
//       ? console.log('string')
//       : typeof argument === 'number'
//       ? console.log('number')
//       : console.log('unkown');
// };

// argType(18);
// argType('Vent');
// argType(true);
// argType('235');

///////////////////////////////////////////////////

// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms),
// яка перевіряє, чи може користувач зареєструватись на сайті.
// І повертає true - якщо може зареєструватись і false, якщо - ні.
// Користувач може зареєструватись, якщо йому виповнилося 13 років
// і він прийняв умови використання.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача;
// hasAcceptedTerms - буль (вказує чи прийняв користувач умови використання);

// const canRegisterOnSite = function (age, hasAcceptedTerms) {
//   if (age >= 13 && hasAcceptedTerms === true) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(canRegisterOnSite(12, true));
// console.log(canRegisterOnSite(16, false));
// console.log(canRegisterOnSite(16, true));
// console.log(canRegisterOnSite(13, true));

/////////////////////////////////////////////////////

// Написати функція для обчислення довжини рядка.
// Функція отримує рядок в якості аргументу і
// виводить в консоль повідомлення "Довжина рядка length"

// const arrayLength = function (array) {
//   return `Довжина рядка ${array.length}`;
// };

// console.log(arrayLength('tornado'));
// console.log(arrayLength('Lorem5'));

///////////////////////////////////////////////////////

// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно

// const max = 100;
// const min = 50;
// let numberSumm = 0;

// for (let number = min; number <= max; number += 2) {
//   numberSumm += number;
// }
// console.log(numberSumm);

////////////////////////////////////////////////////////////////

// Написати функцію getCountryInfo(country), котра буде
// отримувати назву країни і виводити інформацію про неї
// China => "Китай - найбільша країна за населенням у світі."
// Australia => "Австралія - найбільший острів та країна в Океанії."
// France => "Франція відома своєю гастрономією та мистецтвом."
// Germany => "Німеччина - найбільша економіка в Європі."
// Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."

// const getCountryInfo = function (country) {
//   switch (country) {
//     case 'Canada':
//       console.log(
//         'Канада - друга за площею країна у світі, відома своєю природою.'
//       );
//       break;
//     case 'Germany':
//       console.log('Німеччина - найбільша економіка в Європі.');
//       break;
//     case 'France':
//       console.log('Франція відома своєю гастрономією та мистецтвом.');
//       break;
//     case 'Australia':
//       console.log('Австралія - найбільший острів та країна в Океанії.');
//       break;
//     case 'China':
//       console.log('Китай - найбільша країна за населенням у світі.');
//       break;
//     default:
//       console.log('Інформація про цю країну відсутня.');
//   }
// };

// getCountryInfo('Germany');
// getCountryInfo('Canada');
// getCountryInfo('France');
// getCountryInfo('Australia');
// getCountryInfo('China');
// getCountryInfo('Ukraine');
// getCountryInfo('Austria');
// getCountryInfo('Itali');

//////////////////////////////////////////////

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

////////////////////////////////////////////////

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

///////////////////////////////////////////////////////

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };

// console.log(apartment.location);

/////////////////////////////////////////

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

// console.log(credentials.email);
// console.log(credentials.password);

//////////////////////////////////////////////

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   if (apartment.hasOwnProperty.call(apartment, key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(keys);
// console.log(values);

///////////////////////////////////////////////////////

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = [];

// const keysForOf = Object.keys(apartment);

// for (const key of keysForOf) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

//////////////////////////////////////////////////

// function countProps(object) {
//   let propCount = 0;

//   const keysFor = Object.keys(object);

//   for (const key of keysFor) {
//     propCount = keysFor.length;
//   }

//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//////////////////////////////////////////////////////

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

//////////////////////////////////////

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const salarNumber = Object.values(salaries);
//   const salarKey = Object.keys(salaries);
//   console.log(salarKey);

//   for (const values of salarNumber) {
//     totalSalary += values;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

////////////////////////////////////////

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// // console.log(colors.hex);

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   console.log(colors.keys);
// }

// console.log(hexColors);
// console.log(rgbColors);

///////////////////////////////////////////////////////////////////////////////////////

// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 5.8 },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 4.5 },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 2.1,
//   },
// ];

// const authorToSearchFor = 'Robert Sheckley';

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }

////////////////////////////////////////////////////////////////////////////////////////

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const i of products) {
//     if (i.name === productName) {
//       return i.price;
//     }
//   }
// }

// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));

///////////////////////////////////////////////////////////////////

// function getAllPropValues(propName) {
//   const result = [];

//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (const key of products) {
//     if (key[propName]) {
//       result.push(key[propName]);
//     }
//   }
//   console.log(result);
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

////////////////////////////////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }

////////////////////////////////////////////////////////

// function calculateTotalPrice(productName) {
//   let summ;
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const key of products) {
//     if (key.name === productName) {
//       return key.price * key.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));

////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));

//////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     console.log(this.potions);
//   },
// };

// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion('Invisibility');
// atTheOldToad.addPotion('Power potion');

////////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let summPotions = 0;
//     for (const summ of this.potions) {
//       summPotions += summ.price;
//     }
//     return summPotions;
//   },
// };

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });

// console.log(atTheOldToad.getTotalPrice());

////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const phial of this.potions) {
//       if (phial.name === oldName) {
//         phial.name = newName;
//       }
//     }
//   },
// };

// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility'));
// console.log(atTheOldToad.updatePotionName('Speed potion', 'Polymorth'));

/////////////////////////////////////////////////////

// Напишіть функцію, яка створює масив з вказаною довжиною і заповнює його вказанним значення.
// Наприклад функція fillArray(3, 'a') повертає масив ['a', 'a', 'a'].

// function fillArray(numIndex, value) {
//   const result = [];
//   for (let index = 0; index < numIndex; index++) {
//     result.push(value);
//   }
//   return result;
// }

// console.log(fillArray(3, 'a'));

///////////////////////////////////////////////////////////////

// Написати функцію clearArray(array), котра створить новий масив
// в якому не буде значень, які приводяться до false

// const array = [
//   1,
//   0,
//   54,
//   'doc',
//   null,
//   'jpg',
//   undefined,
//   '',
//   'png',
//   'exe',
//   false,
//   'mp4',
//   NaN,
//   'hbs',
// ];

// function clearArray(params) {
//   const arrNew = [];
//   for (const iter of array) {
//     if (iter) {
//       arrNew.push(iter);
//     }
//   }
//   return arrNew;
// }
// console.log(clearArray(array));

////////////////////////////////////////////////

// Напиши скрипт, який порівняє два масива і виведе у консоль результат:
// true - якщо всі елементи однакові і false - в іншому випадку

// const arr1 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr2 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];
// const arr3 = [4, 232, 6, -30, 'color', 324, 'list', 1, 11, 9, 'dream', 34, 0];
// const arr4 = ['color', 6, -30, 11, 9, 1, 'dream', 324, 34, 4, 232, 0, 'list'];
// const arr5 = [1, 4, 6, 'color', 'list', 11, 9, 'dream', 34, 0, -30, 'lesson'];
// const arr6 = [6, 324, 'dream', -30, 9, 8, 34, 'color', 4, 232, 0, 'list', 11];
// const arr7 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr8 = [6, 'dream', -30, 10, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// function arrays(arr, aarr) {
//   if (arr.length !== aarr) {

//     if(!aarr.includes)
//   }

// }

////////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію calculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function calculateAverage(...args) { }

//////////////////////////////////////////////////

// function add(...args) {
//   let summ = 0;
//   for (let i = 0; i < args.length; i++) {
//     summ += args[i];
//   }
//   return summ;
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));

//////////////////////////////////////////////////////

// function addOverNum(value, ...args) {
//   let summ = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] > value) {
//       summ += args[i];
//     }
//   }
//   return summ;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

/////////////////////////////////////////////////////////////

// function getExtremeScores(scores) {
//   const result = {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
//   return result;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

//////////////////////////////////////////////////////////////////////

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore, worstScore);

////////////////////////////////////////////////////////////////

// Розрахувати загальну суму всіх замовлень та вивести інформацію у форматі:
// `Загальна сума всіх замовлень: totalAmount`

// const orders = [
//   { id: 1, product: 'Футболка', quantity: 2, price: 15 },
//   { id: 2, product: 'Шорти', quantity: 3, price: 20 },
//   { id: 3, product: 'Кросівки', quantity: 1, price: 50 },
// ];

// let totalAmount = 0;

// for (const iterator of orders) {
//   totalAmount += iterator.quantity * iterator.price;
// }

// console.log(`Загальна сума всіх замовлень: ${totalAmount}`);

//////////////////////////////////////////////////////////////

// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суму замовлення
// і збережіть його результат у змінній totalCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };

// function totalPrice(cart) {
//   let totalCost = 0;
//   for (const key in cart) {
//     totalCost += cart[key];
//   }

//   console.log(totalCost);
// }

// totalPrice(cart);

//////////////////////////////////////////////////

// Напишіть функцію, яка створює масив з вказаною довжиною і заповнює його вказанним значення.
// Наприклад функція fillArray(3, 'a') повертає масив ['a', 'a', 'a'].

// function fillArray(numIndex, value) {
//   const result = [];
//   for (let index = 0; index < numIndex; index++) {
//     result.push(value);
//   }
//   return result;
// }

// console.log(fillArray(5, 'ca'));

///////////////////////////////////////////////////////////////

// Написати функцію clearArray(array), котра створить новий масив
// в якому не буде значень, які приводяться до false

// const array = [
//   1,
//   0,
//   54,
//   'doc',
//   null,
//   'jpg',
//   undefined,
//   '',
//   'png',
//   'exe',
//   false,
//   'mp4',
//   NaN,
//   'hbs',
// ];

// function clearArray(params) {
//   const arrNew = [];
//   for (const iter of array) {
//     if (iter) {
//       arrNew.push(iter);
//     }
//   }
//   return arrNew;
// }
// console.log(clearArray(array));

////////////////////////////////////////////////

// Напиши скрипт, який порівняє два масива і виведе у консоль результат:
// true - якщо всі елементи однакові і false - в іншому випадку

// const arr1 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr2 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];
// const arr3 = [4, 232, 6, -30, 'color', 324, 'list', 1, 11, 9, 'dream', 34, 0];
// const arr4 = ['color', 6, -30, 11, 9, 1, 'dream', 324, 34, 4, 232, 0, 'list'];
// const arr5 = [1, 4, 6, 'color', 'list', 11, 9, 'dream', 34, 0, -30, 'lesson'];
// const arr6 = [6, 324, 'dream', -30, 9, 8, 34, 'color', 4, 232, 0, 'list', 11];
// const arr7 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr8 = [6, 'dream', -30, 10, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// function arrays(arr, aarr) {
//   if (arr.length !== aarr.length) {
//     return false;
//   }
//   for (const i of aarr) {
//     if (!aarr.includes(i)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(arrays(arr5, arr2));
// console.log(arrays(arr5, arr3));
// console.log(arrays(arr5, arr4));
// console.log(arrays(arr1, arr5));
// console.log(arrays(arr5, arr6));
// console.log(arrays(arr5, arr7));
// console.log(arrays(arr5, arr8));

////////////////////////////////////////////////

// Напишіть функцію calculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function calculateAverage(...args) {
//   let count = 0;
//   let result = 0;
//   for (const iter of args) {
//     if (typeof iter === 'number') {
//       result += iter;
//       count += 1;
//     }
//   }
//   return result / count;
// }

// console.log(calculateAverage(25, 'jkb', 5, 28));

///////////////////////////////////////////////////////////////

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultracheese', deliverPizza));

//////////////////////////////////////////////////////////////////////

// const makePizza = (pizzaName, callback) => {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// };

// makePizza('Royal Grand', pizzaName => {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', pizzaName => {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// //////////////////////////////////////////////////////////////////

// const makePizza = (pizzaName, callback) => {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// };

// makePizza('Royal Grand', pizzaName => {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', pizzaName => {
//   console.log(`Eating pizza ${pizzaName}`);
// });

//////////////////////////////////////////////////////////////////

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

/////////////////////////////////////////////////////////////////////

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (order) {
//     totalPrice += order;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

/////////////////////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//   const result = [];
//   numbers.forEach(function (element) {
//     if (element > value) {
//       result.push(element);
//     }
//   });
//   return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

/////////////////////////////////////////////////////////////////////

// const filterArray = (numbers, value) => {
//   const result = [];
//   numbers.forEach(element => {
//     if (element > value) {
//       result.push(element);
//     }
//   });
//   return result;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

/////////////////////////////////////////////////////////////////////

// const changeEven = (numbers, value) => {
//   let newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] + value);
//     } else if (numbers[i] % 2 !== 0) {
//       newNumbers.push(numbers[i]);
//     }
//   }
//   return newNumbers;
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));

/////////////////////////////////////////////////////////////////////

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

/////////////////////////////////////////////////////////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);

/////////////////////////////////////////////////////////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

///////////////////////////////////////////////////////////////////////////
// const us = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
////////////////////////////////////////////////////////////////////////////

// const getUserEmails = users => {
//   return users.map(user => user.email);
// };

// console.log(
//   getUserEmails(us)
// );

//////////////////////////////////////////////////////////////////////

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(filt => filt % 2 === 0);
// const oddNumbers = numbers.filter(filt => filt % 2 !== 0);

// console.log(evenNumbers, oddNumbers);

////////////////////////////////////////////////////////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks, booksByAuthor);

//////////////////////////////////////////////////////////////////////////////////

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(us, 'blue'));
// console.log(getUsersWithEyeColor(us, 'green'));
// console.log(getUsersWithEyeColor(us, 'brown'));

////////////////////////////////////////////////////////////////////////////////////////////

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };

// console.log(getUsersWithAge(us, 20, 30));
// console.log(getUsersWithAge(us, 30, 40));
// console.log(getUsersWithAge(us, 80, 100));

/////////////////////////////////////////////////////////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

////////////////////////////////////////////////////////////////////

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(getUserWithEmail(us, 'shereeanthony@kog.com'));
// console.log(getUserWithEmail(us, 'elmahead@omatom.com'));
// console.log(getUserWithEmail(us, 'blackburndotson@furnigeer.com'));

////////////////////////////////////////////////////////////////////////////////

// const isEveryUserActive = users => {
//   return users.every(user => user.isActive);
// };

// console.log(isEveryUserActive(us));

//////////////////////////////////////////////////////////////

// const isAnyUserActive = users => {
//   return users.some(user => user.isActive);
// };

// console.log(isAnyUserActive(us));

///////////////////////////////////////////////////////////////////

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((timePlayer, plays) => {
//   return timePlayer + plays;
// });

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime, averagePlayTime);

/////////////////////////////////////////////////////////////////////////

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// let acc = 0;

// const totalAveragePlaytimePerGame = players.reduce((data, time) => {
//   data = time.playtime / time.gamesPlayed;
//   acc += data;
// }, 0);

// console.log(acc);

////////////////////////////////////////////////////////////////////////////////

// const calculateTotalBalance = users => {
//   let summ = 0;
//   users.reduce((manySumm, many) => {
//     summ += many.balance;
//   }, 0);
//   console.log(summ);
// };

// console.log(calculateTotalBalance(us));

//////////////////////////////////////////////////////////

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// console.log(ascendingReleaseDates, alphabeticalAuthors);

////////////////////////////////////////////////////////////////////////

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// console.log(ascendingReleaseDates, descendingReleaseDates);

////////////////////////////////////////////////////////////////////////////

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder, authorsInReversedOrder);

////////////////////////////////////////////////////////////////////////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = books.toSorted((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

// console.log(
//   sortedByAuthorName,
//   sortedByReversedAuthorName,
//   sortedByAscendingRating,
//   sortedByDescentingRating
// );

//////////////////////////////////////////////////////////////////////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(names);

///////////////////////////////////////////////////////////////////////////

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     // console.log(checkPizza);
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order('Smoked'));
// console.log(pizzaPalace.order('Four meats'));
// console.log(pizzaPalace.order('Big Mike'));
// console.log(pizzaPalace.order('Viennese'));

/////////////////////////////////////////////////////////////////////

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(child);

/////////////////////////////////////////////////////////////////

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(child);

/////////////////////////////////////////////////////////////

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

/////////////////////////////////////////////////////////

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// console.log(new Car('Audi', 'Q3', 36000));

//////////////////////////////////////////////////////////

// class Car {
//   constructor(prices) {
//     this.brand = prices.brand;
//     this.model = prices.model;
//     this.price = prices.price;
//   }
// }

// const offer = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const offer = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const offer = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// console.log(offer);

///////////////////////////////////////////////////////////////////////////////

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// const offer = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// console.log(offer.getPrice());
// offer.changePrice(22222);
// console.log(offer.getPrice());

/////////////////////////////////////////////////////////////////////////

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail()); // “mango@mail.com”

///////////////////////////////////////////////////////////////////////

// class Car {
//   #brand;
//   model;
//   price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

///////////////////////////////////////////////////////

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

////////////////////////////////////////////////////////////

// class Car {
//   static maxPrice = 50000;

//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

/////////////////////////////////////////////////////////////////

// class Car {
//   static #maxPrice = 50000;

//   static checkPrice(price) {
//     if (Car.#maxPrice >= price) {
//       return 'Success! Price is within acceptable limits';
//     }
//     return 'Error! Price exceeds the maximum';
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

/////////////////////////////////////////////////////////////////////////

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// Admin.role.BASIC;

//////////////////////////////////////////////////////////////////

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

////////////////////////////////////////////////////////////////////

// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

////////////////////////////////////////////////////////////////////////

// const images = [
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//     description: 'Aerial Beach View',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//     description: 'Flower Blooms',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine Mountains',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//     description: 'Mountain Lake Sailing',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     description: 'Alpine Spring Meadows',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     description: 'Nature Landscape',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     description: 'Lighthouse Coast Sea',
//   },
// ];

// function addId(images) {
//   let numberId = 1;
//   let newArray = [];

//   for (const { preview, original, description, id = numberId } of images) {
//     console.log(description, id);
//     newArray.push(
//       `{id: ${id}, preview: ${preview}, original: ${original}, description: ${description}}`
//     );

//     numberId += 1;
//     // console.log(id);
//   }
//   return newArray;
// }

// console.log(addId(images));

//////////////////////////////////////////////////////////////

// function countBy(x, n) {
//   let z = [];
//   for (let index = 1; index <= n; index++) {
//     z.push(x * index);
//   }

//   return z;
// }

// console.log(countBy(1, 10));
// console.log(countBy(2, 5));

/////////////////////////////////////////////////////////////

// function past(h, m, s) {
//   //#Happy Coding! ^_^
//   return ((h * 60 + m) * 60 + s) * 1000;
// }

// console.log(past(1, 0, 0)); //3600000
// console.log(past(1, 0, 1)); //3601000
// console.log(past(0, 0, 0)); //0
// console.log(past(1, 1, 1)); //3661000
// console.log(past(0, 1, 1)); //61000

/////////////////////////////////////////////

// function findNeedle(haystack) {
//   let el = '';
//   let itEl = 0;
//   itEl = haystack.indexOf('needle');
//   return `found the needle at position ${itEl}`;
// }

// var haystack_1 = [
//   '3',
//   '123124234',
//   undefined,
//   'needle',
//   'world',
//   'hay',
//   2,
//   '3',
//   true,
//   false,
// ];
// var haystack_2 = [
//   '283497238987234',
//   'a dog',
//   'a cat',
//   'some random junk',
//   'a piece of hay',
//   'needle',
//   'something somebody lost a while ago',
// ];
// var haystack_3 = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   8,
//   7,
//   5,
//   4,
//   3,
//   4,
//   5,
//   6,
//   67,
//   5,
//   5,
//   3,
//   3,
//   4,
//   2,
//   34,
//   234,
//   23,
//   4,
//   234,
//   324,
//   324,
//   'needle',
//   1,
//   2,
//   3,
//   4,
//   5,
//   5,
//   6,
//   5,
//   4,
//   32,
//   3,
//   45,
//   54,
// ];

// console.log(findNeedle(haystack_1));
// console.log(findNeedle(haystack_2));
// console.log(findNeedle(haystack_3));

/////////////////////////////////////////////////////

function abbrevName(name) {
  //// варіант 0
  // return name
  //   .split(' ')
  //   .map(x => x.substr(0, 1).toUpperCase())
  //   .join('.');
  ////варіант 1
  // const nameArr = name.split(' ');
  // return (nameArr[0][0] + '.' + nameArr[1][0]).toUpperCase();
  //варіант 2 мій
  //   const firstName = name.split(' ').slice(0, 1).join().toUpperCase();
  //   const lastName = name.split(' ').slice(1, 2).join().toUpperCase();
  //   return `${firstName[0]}.${lastName[0]}`;
  ////варіант 3
  //   return name
  //     .split(' ')
  //     .map(i => i[0].toUpperCase())
  //     .join('.');
}

// console.log(abbrevName('sam Harris'));
// console.log(abbrevName('Patrick Feenan'));
// console.log(abbrevName('Evan Cole'));
// console.log(abbrevName('P Favuzzi'));
// console.log(abbrevName('David Mendieta'));

///////////////////////////////////////////////////////////

// function century(year) {
//   return Math.ceil(year / 100);
// }

// console.log(century(1705)); // 18
// console.log(century(1900)); // 19
// console.log(century(1601)); // 17
// console.log(century(2000)); // 20
// console.log(century(89)); // 1

//////////////////////////////////////////////////

// const date = new Date();
// console.log(new Date());

// const date = new Date(2030, 0, 16, 14, 25, 0, 0);
// console.log(date);

///////////////////////////////////////////////

// const startTime = Date.now();

// // Твій код, виконуваний упродовж деякого часу
// for (let i = 0; i <= 100; i += 1) {
//   console.log(i);
// }

// const endTime = Date.now();
// const elapsedTime = endTime - startTime;

// console.log(`Elapsed time: ${elapsedTime} ms`);

///////////////////////////////////////////////////////

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log('Promise settled')); // "Promise settled"

////////////////////////////////////////////

// const vvv = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// console.log(vvv);

// vvv
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });

// console.log(vvv);

//////////////////////////////////////////////////////

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess('success value');
//     } else {
//       onError('error');
//     }
//   }, 2000);
// };

// fetchUserFromServer(
//   'Mango',
//   user => console.log(user),
//   error => console.error(error)
// );

////////////////

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve('success value'); // значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject('error'); // значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer('Mango') // результатом виклику fetchUserFromServer("Mango") буде проміс
//   .then(user => console.log(user)) // проміс обробляємо в методі then()
//   .catch(error => console.error(error)); // проміс обробляємо в методі catch()

/////////////////////////////////////////////////

// const makeGreeting = guestName => {
//   if (!guestName) {
//     return Promise.reject('Guest name must not be empty');
//   } else {
//     return Promise.resolve(`Welcome ${guestName}`);
//   }
// };

// makeGreeting('Mango')
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));

/////////////////////////////////////////////////

// const makePromise = ({ value, delai, shouldResolve }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(value);
//       } else {
//         reject(`error ${value}`);
//       }
//     }, delai);
//   });
// };

// makePromise({ value: 'URRA 3000', delai: 3000, shouldResolve: true })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// makePromise({ value: 'URRA 4000', delai: 4000, shouldResolve: false })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// makePromise({ value: 'URRA 2000', delai: 2000, shouldResolve: true })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

///////////////////////////////////////////////////

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return 'Even';
//   }
//   return 'Odd';
// }

// console.log(evenOrOdd(2));

///////////////////////////////////////////////

// function booleanToString(b) {
//   return String(b);
// }

// console.log(booleanToString(true));
// console.log(booleanToString(false));

///////////////////////////////////////////////////

// function removeChar(str) {
//   return str.slice(1, -1);
// }

// console.log(removeChar('edddddde'));

////////////////////////////////////////////////////

// function litres(time) {
//   return Math.floor(time * 0.5);
// }

// console.log(litres(12.3));

//////////////////////////////////////////////

// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     const isDone = Math.random() > 0.5;
//     console.log(isDone);
//     if (isDone) {
//       resolve('Urrraaa!');
//     } else {
//       reject('Error!');
//     }
//   }, 1000);
// };

// const promise = new Promise(executor);

// console.log(promise);

// promise
//   .then(result => {
//     return result;
//   })
//   .then(data => {
//     console.log(data);
//     console.log(promise);
//   })
//   .catch(err => {
//     console.log(err);
//     console.log(promise);
//   })
//   .finally(() => {
//     console.log('Finish!!!');
//   });

/////////////////

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isDone = Math.random() > 0.5;
//     if (isDone) {
//       resolve('Hello World!');
//     } else {
//       reject('error!');
//     }
//   }, 500);
// });

// promise
//   .then(result => {
//     return result;
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('Alles');
//   });

///////////////////////////////

// function smash(words) {
//   return words.join(' ').trim();
// }

// console.log(smash(['     hello', 'world', 'this', 'is', 'great ']));

/////////////////////////////////////////////

// function setAlarm(employed, vacation) {
//   return employed && !vacation;
//   // if (employed && !vacation) {
//   //   return true;
//   // }
//   // return false;
// }

// console.log(setAlarm(true, false));
// console.log(setAlarm(true, true));
// console.log(setAlarm(false, false));
// console.log(setAlarm(false, true));

////////////////////////////////////////////

function feast(beast, dish) {
  const firstLetterBeast = beast.split(' ').slice(0, 1).join().toLowerCase()[0];
  const lastLetterWord = beast.split(' ').slice(-1).join().toLowerCase();
  const lastLetterBeast = lastLetterWord[lastLetterWord.length - 1];

  const firstLetterDish = dish.split(' ').slice(0, 1).join().toLowerCase()[0];
  const lastLetterWordDish = dish.split(' ').slice(-1).join().toLowerCase();
  const lastLetterDish = lastLetterWordDish[lastLetterWordDish.length - 1];
  return (
    firstLetterBeast === firstLetterDish && lastLetterBeast === lastLetterDish
  );
}
console.log(feast('great blue heron', 'garlic naan')); //, true);
console.log(feast('chickadee', 'chocolate cake')); //, true);
console.log(feast('brown bear', 'bear claw')); //, false);
