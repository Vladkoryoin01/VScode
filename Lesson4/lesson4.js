// const getAllServicePrices = function (servicePrice1, servicePrice2) {
//     return servicePrice1 + servicePrice2;
// };

// function getFullPrice(allServicePrices, screenPrice) {
//     return allServicePrices + screenPrice;
// }

// function getTitle(titleProject) {
//     return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
// }


// function getServicePercentPrices(fullPrice) {
//     return Math.round(fullPrice * 0.9);
// }

// function getRollbackMessage(fullPrice) {
//     if (fullPrice > 50000) {
//         console.log("Сделаем скидку 10%");
//     } else if (fullPrice > 20000 && fullPrice <= 50000) {
//         console.log("Сделаем скидку 5%");
//     } else if (fullPrice > 0 && fullPrice <= 20000) {
//         console.log("Скидка не предусмотрена");
//     } else if (fullPrice === 0) {
//         console.log("Проект бесплатный или в разработке");
//     } else {
//         console.log("Что-то пошло не так");
//     }
// }


// const titleProject = prompt("Название проекта?");
// console.log("Название проекта:", titleProject);
// const screensValue = prompt("Какие экраны нужны? (шаблонные, с уникальным дизайном, с анимациями)");
// console.log("Тип экранов:", screensValue);

// const responsive = prompt("Нужен ли респонсивный сайт? (да/нет)").toLowerCase();
// if (responsive === "да") {
//     alert("Отлично! 🚀");
//     console.log("Результат:", true);
// } else {
//     alert("Понял, делаем без адаптива! 👍");
//     console.log("Результат:", false);
// }

// let service1 = prompt("Какой сервис нужен?");
// console.log("Сервис 1:", service1);
// let servicePrice1 = Number(prompt("Сколько это будет стоить?"));
// console.log("Стоимость сервиса 1:", servicePrice1);

// let service2 = prompt("Какой еще сервис вам нужен?");
// console.log("Сервис 2:", service2);
// let servicePrice2 = Number(prompt("Сколько будет стоить второй сервис?"));
// console.log("Стоимость сервиса 2:", servicePrice2);

// let screenPrice = Number(prompt("Сколько стоит работа с экранами?"));
// console.log("Стоимость экранов:", screenPrice);

// // Вызываем функции и сохраняем результаты
// let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
// let fullPrice = getFullPrice(allServicePrices, screenPrice);
// let formattedTitle = getTitle(titleProject);
// let servicePercentPrice = getServicePercentPrices(fullPrice);

// // Вывод в консоль
// console.log("Название проекта (форматировано):", formattedTitle);
// console.log("Стоимость всех услуг:", allServicePrices);
// console.log("Полная стоимость проекта:", fullPrice);
// console.log("Стоимость после вычета комиссии:", servicePercentPrice);

// // Проверяем скидку
// getRollbackMessage(fullPrice);

// const sayHi = function () {
//     console.log("Привет!");
// };


// function greet(name) {
//     console.log("Привет, " + name + "");
// }

// greet("Анна"); // "Привет, Анна!"
// greet("Иван"); // "Привет, Иван!"

// function a(price) {
//     let procent = (price * 0.1);
//     console.log("У меня есть:", price * 0.5 - (procent));
//     return price * 0.2;
// }

// let x = a(1000);
// console.log("Потратил", x);

// function getUser(name, age) {
//     return {
//         name: name,
//         age: age
//         prompt(getUser)
//     };
// }

// let user = getUser(name, age);
// console.log(user); 


function getUser(name, age) {
    return {
        name: name,
        age: age
    };
}

let userName = prompt("Введите имя:");
let userAge = Number(prompt("Введите возраст:"));

let user = getUser(userName, userAge);
console.log(user);