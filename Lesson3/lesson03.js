

// const titleProject = "Оценка проекта";
// const screensValue = "шаблонные, с уникальным дизайном, с анимациями";
// const screenPrice = 5000;
// const percentage = 20;
// const fullPrice = 100000;


const titleProject = prompt('название проекта')
console.log(titleProject);
const screensValue = prompt("шаблонные, с уникальным дизайном, с анимациями")
console.log(screensValue);


const responsive = prompt("Нужен ли респонсивный сайт? (да/нет)").toLowerCase();
if (responsive === "да") {
    alert("Отлично! 🚀");
    console.log(true)
} else {
    alert("Понял, делаем без адаптива! 👍");
    console.log(false)
}


let service1 = prompt("Какой сервис нужен?");
console.log(service1)
let servicePrice1 = Number(prompt("Сколько это будет стоить?"));
console.log(servicePrice1)

let service2 = prompt("Какой еще сервис тебе нужен?");
console.log(service2)
let servicePrice2 = Number(prompt("Сколько будет стоить этот второй сервис?"));
console.log(servicePrice2)

let screenPrice = Number(prompt("Сколько стоит работа с экранами?"));
console.log(screenPrice)


let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let servicePercentPrice = Math.round(fullPrice * 0.9);
console.log("Итоговая сумма после вычета комиссии:", servicePercentPrice);

if (fullPrice > 50000) {
    console.log("Сделаем скидку 10%");
} else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log("Сделаем скидку 5%");
} else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice === 0) {
    console.log("Проект бесплатный или в разработке");
} else {
    console.log("Что-то пошло не так");
}
// let a = 5;
// let b = '10'
// // let res = a + + b
// console.log(a.toString());

// // console.log(res);

// console.log(typeof a);
// console.log(typeof b);
// console.log(a + b);

// // alert('hello');
// let age = + prompt('укажите возраст!');
// let a = 10
// let res = age + a
// console.log(res);





