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
//       count += 1;
//     }
//   }
// }

// console.log(calculateAverage(25, 'jkb', 5, 28));

///////////////////////////////////////////////////////////////

// Для об'єкту book, послідовно виконай наступні дії:
// 1. Додай поле rating зі значенням 4.8.
// 2. Заміни значення поля genre на "Classic Fiction".
// 3. Заміни значення поля isBestseller на false.
// 4. Виведи за допомогою console.log вміст об'єкта book
//    у форматі ключ:значення,
//    використовуючи Object.keys() і for...of.
// Очікуваний результат
// title: To Kill a Mockingbird
// author: Harper Lee
// genre: Classic Fiction
// yearPublished: 1960
// isBestseller: false
// rating: 4.8

// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Southern Gothic",
//     yearPublished: 1960,
//     isBestseller: true
// };

/////////////////////////////////////////////////////

// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// const user = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };

// const checkKeyInObject = function (obj, key) {
//   //   for (const keyObj in obj) {
//   //     if (keyObj === key) {
//   //       return true;
//   //     }
//   //   }
//   //   return false;

//   return Object.keys(obj).includes(key);
// };

// console.log(checkKeyInObject(user, 'name'));
// console.log(checkKeyInObject(user, 'g'));

////////////////////////////////////////////////////////////

// Додати метод getinfo в об'єкт user, який повертатиме інформацію
// про користувача у форматі:
// `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`
// const user1 = {
//   name: 'Peter',
//   surname: 'Parker',
//   age: 22,
//   position: 'spider-man',
// };

// user1.getinfo = function () {
//   return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`;
// };

// console.log(user1.getinfo());

////////////////////////////////////////////////////////

// Створіть об'єкт calculator із трьома методами:
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат

// const calculator = {
//     read(a, b) { this.value1 = a; this.value2 = b },
//     return sum() {
//         this.value1 + this.value2;
//     },

// return mult() {
//     this.value1 * this.value2;
// },
// };

/////////////////////////////////////////////////////////

// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суму замовлення
// і збережіть його результат у змінній totalCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };

// function totalPrice() {
//   const totalCost = 0;
// }

////////////////////////////////////////////////////

///////////////////////////////////////////////////

/*
? Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
? - email - пошта, рядок
? - age - вік, число
? - numberOfPosts - кількість постів, число
? - topics - масив тем на яких спеціалізується блогер
?
? Клас чекає 4 параметри - email, age, numberOfPosts, topics.
?
? - Додай метод getInfo(), який, повертає рядок: Blogger ${email} is ${age} years old and has ${numPosts} posts.
? - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */

// const mango = new Blogger('mango@mail.com', 24, 20, ['tech', 'cooking']);

// console.log(mango);

// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger('poly@mail.com', 19, 17, ['sports', 'gaming']);

// console.log(poly);

// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

/////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////

/*
? Напиши клас User який створює об'єкт із властивостями login та email.
? Оголоси приватні властивості #login та #email, доступ до яких зроби через
? гетер та сетер login та email.
 */

// const mango = new User('Mango', 'mango@dog.woof');

// console.log(mango);

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// console.log(mango.email); // mango@dog.woof
// mango.email = 'gaatke@fucvod.com';
// console.log(mango.email); // gaatke@fucvod.com

// const poly = new User('Poly', 'poly@mail.com');

// console.log(poly);

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

//////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////

/*
? Напиши клас Storage який створює об'єкти для керування складом товарів.
? При виклику отримуватиме один аргумент - початковий масив товарів і
? записуватиме його властивість items.
?
? Додай методи класу:
? - getItems() - повертає масив товарів.
? - addItem(item) - отримує новий товар і додає його до поточних.
? - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

/////////////////////////////////////////////////////////////////////////////////

// Додай функціонал зміни теми при натисканні(подія change) на чекбокс
// #theme-switch-toggle у тулбарі.
// За замовчуванням тема світла.
// При зміні теми необхідно додавати на елемент body клас light-theme або dark-theme.
// Вибрана тема повинна зберігатись між перезавантаженнями сторінки.
// Для зберігання теми використовуй localStorage.
// Якщо при завантаженні сторінки тема темна, не забудь поставити властивість checked
// у чекбоксу #theme -switch-toggle у true, щоб повзунок зрушив у правильне положення.
// Для зручності зберігання списку використовуй такий перелік.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const temSwitch = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
// console.log(temSwitch);

const onTheme = localStorage.getItem('theme');

if (onTheme) {
  body.classList.add(onTheme);
} else {
  body.classList.add(Theme.LIGHT);
}

if (onTheme === Theme.DARK) {
  temSwitch.checked = true;
}

const changeTemeForm = event => {
  if (temSwitch.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

temSwitch.addEventListener('change', changeTemeForm);

/////////////////////////////

// * Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми
// * у локальне сховище і змінюй кнопку login на logout і роби поля введення
// * Недоступними для зміни.
// * При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
// * та недоступні для зміни поля з даними користувача.
// * Клік по кнопці logout повертає все в початковий вигляд і видаляє дані користувача
// * З локального сховища.
// *
// * Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// * повідомляти про помилку.

// const User = {
//   email: 'user@gmail.com',
//   password: '123',
// };

// const form = document.querySelector('#login-form');
// console.dir(form);

// form.addEventListener('submit', onSubmit);

// const dataLocal = JSON.parse(localStorage.getItem('userData'));
// if (dataLocal) {
//   form.elements.button.textContent = 'log aut';
//   form.elements.email.disabled = true;
//   form.elements.password.disabled = true;
//   form.elements.email.value = dataLocal.email;
//   form.elements.password.value = dataLocal.password;
// }

// function onSubmit(event) {
//   event.preventDefault();

//   if (dataLocal) {
//     form.elements.button.textContent = 'Log in';
//     form.elements.email.disabled = false;
//     form.elements.password.disabled = false;
//     localStorage.removeItem('userData');
//     form.reset();
//     return;
//   }
//   if (
//     form.elements.email.value !== User.email ||
//     form.elements.password.value !== User.password
//   ) {
//     alert('Данні введенні не вірно!');
//     return;
//   }
//   const data = {
//     email: form.elements.email.value,
//     password: form.elements.password.value,
//   };

//   localStorage.setItem('userData', JSON.stringify(data));
//   form.elements.button.textContent = 'log aut';
//   form.elements.email.disabled = true;
//   form.elements.password.disabled = true;
// }

///////////////////////////////////////////////

// Створіть функцію delayedPromise, яка приймає час затримки(у мілісекундах)
// та повертає проміс.Цей проміс має виконатися після вказаної затримки і
// вивести повідомлення в консоль "Пройшло delay мілісекунд
// якщо переданий аргумент не є числом логуй повідомлення про помилку
// 'Затримка має бути числом'

// function delayPromise(delay) {
//   return new Promise((resolve, reject) => {
//     if (typeof delay === 'number') {
//       setTimeout(() => {
//         resolve(delay);
//       }, 2000);
//     } else {
//       reject('Нема результату');
//     }
//   });
// }

// delayPromise(2000)
//   .then(delay => {
//     console.log(`Пройшло ${delay} мілісекунд`);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/////////////////////////////////////////

// За допомогою prompt запропонуйте користувачу ввести значення.
// Створіть функцію checkValue(value), всередині якої буде Promise
// Якщо введене користувачем значення не є числом, потрібно відхилити проміс і логувати 'error'
// Якщо введене користувачем значення є число і воно парне, розв'язуй проміс і повертай 'even'
// через 1 секунду.
// Якщо введене користувачем значення є число і воно не парне, розв'язуй проміс і повертай 'odd'
// через 2 секунди.

// const value = prompt('Введіть число');
// console.log(value);

// function checkValue(value) {
//   return new Promise((resolve, reject) => {
//     if (!isNaN(value)) {
//       value % 2 === 0
//         ? setTimeout(() => {
//             resolve('парне число');
//           }, 1000)
//         : setTimeout(() => {
//             resolve('не парне число');
//           }, 2000);
//     } else {
//       reject('error');
//     }
//   });
// }

// checkValue(value)
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/////////////////////////////////////////////

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .then(parse => {
//     console.log(parse);
//   })
//   .catch(error => {
//     console.dir(error);
//     if (error.message === '404') {
//       alert('нічого нема!');
//     }

//     // Error handling
//   });

///////////////////////////////////////////////

//    https://api.unsplash.com/

//    /search/photos

//    ?

//    Client-ID=

//   YxttGxgchie4zXZJmCJcWi2YSS7lbE2AXMDbUScO7o8  //

//    &

// fetch('https://api.unsplash.com/');
