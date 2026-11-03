
//  ДОМАШНЄ ЗАВДАННЯ 19 — «Профіль користувача»

//  Задача: крок за кроком зібрати картку користувача
//  з «сирих» даних, які прийшли з форми реєстрації.

//  Дані вже оголошені нижче — початкові значення не змінювати.
//  Код писати під блоком з даними, у тому порядку, у якому йдуть кроки.
//  Результат кожного кроку виводити в консоль через console.log().


//  КРОК 1. Рік народження — до числа.
//  Змінна birthYear — це рядок "1994". Вивести її тип.
//  Перетворити значення на число, зберегти в нову змінну, вивести її тип і значення.

let birthYear1;
let birthYear = "1994";
console.log(typeof birthYear)

birthYear1 = +birthYear
console.log(birthYear1,typeof birthYear1)


//  КРОК 2. Вік.
//  Порахувати вік користувача на основі currentYear та числового року народження.
//  Створити змінну ageIn10Years зі значенням віку та збільшити її на 10.
//  Вивести обидва значення.


const currentYear = 2026;
let age = currentYear - birthYear1;
let ageIn10Years =age;
ageIn10Years +=10;
console.log('Возраст:', age);
console.log('Через 10 лет:', ageIn10Years);



//  КРОК 3. Нормалізація імені та прізвища.
//  Дані прийшли «кривими»: "tARAS" і "shevchenko".
//  Привести імʼя та прізвище до вигляду «перша літера велика, решта — малі».
//  Вивести результат.

let firstName = "tARAS";
let lastName = "shevchenko";
console.log(firstName.substring(0,1).toUpperCase()+firstName.substring(1,firstName.length).toLowerCase()+ " " +lastName.substring(0,1).toUpperCase()+lastName.substring(1,lastName.length).toLowerCase())

// console.log(firstName[0].toUpperCase()+firstName.slice(1).toLowerCase());
// console.log(lastName[0].toUpperCase()+lastName.slice(1).toLowerCase())

//  КРОК 4. Повне імʼя.
//  Створити змінну fullName у форматі "Імʼя Прізвище".
//  Вивести fullName та його довжину.

let fullName;
if (firstName === null || lastName===null){
  console.log('Користувач не визначений.');
} else{
  fullName = firstName.substring(0,1).toUpperCase()+
  firstName.substring(1).toLowerCase()+ ' '+
  lastName.substring(0,1).toUpperCase()
  +lastName.substring(1).toLowerCase()

  console.log(fullName+ " " +fullName.length);
}



//  КРОК 5. Розбір email на частини.
//  Вивести позицію символу "@" у змінній email.
//  Отримати логін (усе до "@") та домен (усе після "@"), домен — у нижньому регістрі.
//  Вивести логін і домен.


let email = "Taras.Shevchenko@Gmail.com";
console.log(email.indexOf("@"))

let email1 = email.split("@")
email1[1]=email1[1].toLowerCase()
console.log(email1[0],email1[1])


//  КРОК 6. Маска email.
//  Створити змінну maskedEmail у форматі: перші 2 символи логіна + "***" + "@" + домен.
//  Вивести maskedEmail.


let emailParts = email.split("@");
let maskedEmail = emailParts[0].slice(0, 2) + "***@" + emailParts[1].toLowerCase();
console.log(maskedEmail);




//  КРОК 7. Перевірка повноліття.
//  Створити змінну isAdult — чи є користувач повнолітнім (18 років і більше).
//  Вивести її значення та тип.
//  Додатково вивести результати трьох виразів:
//    - isAdult && isSubscribed
//    - isAdult || isSubscribed
//    - !isSubscribed


let isSubscribed = true;

let isAdult = age >= 18;
console.log('Повнолітній:', isAdult);
console.log('Тип isAdult:', typeof isAdult);
console.log('Підписка:', isSubscribed);
console.log('Повнолітній І має підписку (&&):', isAdult && isSubscribed);
console.log('Повнолітній АБО має підписку (||):', isAdult || isSubscribed);
console.log('НЕ має підписки (!):', !isSubscribed);


//  КРОК 8. Імʼя для показу.
//  Змінна nickname оголошена, але не має значення.
//  Створити змінну displayName: nickname, а якщо його немає — fullName.
//  Вивести displayName.

let nickname;
let displayName =nickname??fullName;
console.log(displayName)

//  КРОК 9. Прожиті дні.
//  Порахувати, скільки приблизно днів прожив користувач (вік × 365.25),
//  та округлити результат до цілого. Вивести отримане число.
// age *=365.25
// let daysLived = age
// console.log(daysLived)

let daysLived = Math.round(age*365.25)
console.log(daysLived)

//  КРОК 10. Код підтвердження.
//  Згенерувати випадкове чотиризначне ціле число від 1000 до 9999 включно.
//  Вивести його.

let random = Math.floor((Math.random()*9000)+1000)
console.log(random)


//  КРОК 11. Лічильник входів.
//  Змінна visits дорівнює 0. Зафіксувати два входи користувача:
//  перший — постфіксним інкрементом, другий — префіксним.
//  Після кожного вивести і результат самого виразу, і поточне значення visits.

let visits = 0;

console.log(visits++);
console.log(visits);

console.log(++visits);
console.log(visits);

//  КРОК 12. Картка користувача.
//  Одним багаторядковим шаблонним літералом вивести в консоль підсумкову картку:

//  Користувач: Taras Shevchenko
//  Показувати як: Taras Shevchenko
//  Вік: 32 (через 10 років — 42)
//  Email: Ta***@gmail.com
//  Повнолітній: true
//  Підписка: true
//  Входів: 2
//  Прожито днів: 11688
//  Код підтвердження: 4821

console.log(`
  Користувач: ${fullName} 
  Показувати як: ${displayName}
  Вік: ${age} (через 10 років — ${ageIn10Years})
  Email: ${maskedEmail}
  Повнолітній:${isAdult}
  Підписка:${isSubscribed}
  Входів: ${visits}
  Прожито днів:${daysLived}
  Код підтвердження:${random}`)



//  Усі значення мають підставлятися зі змінних, а не бути вписаними вручну.
//  Код підтвердження щоразу буде іншим — це нормально.
// */





// // ==== ДАНІ (не змінювати) ====

// let firstName = "tARAS";
// let lastName = "shevchenko";
// let birthYear = "1994";
// let email = "Taras.Shevchenko@Gmail.com";
// let isSubscribed = true;
// let nickname;
// let visits = 0;
// const currentYear = 2026;

// // ==== КОД НИЖЧЕ ====
