
// const myCity = {
//     city: 'Seoul',
//     Coffee: true,
// }
// myCity.Coffee = 'latte'
// myCity.Name = 'Vlad'

// myCity['popular'] = true
// const countryName = "Second city"
// myCity[countryName] = 'Ansan'

// console.log(myCity)
// -----------------------

// const name = 'Vlad'
// const pasword = 3333

// const userProfile = {
//     name,
//     pasword,
//     hasSignedAgreement: false
// }
// -----------------------


// console.log(userProfile)
// // globalThis.console.log(10)

// -----------------------


// вариант со словом Function
// const myCity = {
//     city: 'Seoul',
//     cityGreeting: function () {
//         console.log('Greetings!')
//     }
// }

// myCity.cityGreeting()

// сокращенный вариант

// const myCity = {
//     city: 'Seoul',
//     cityGreeting() {
//         console.log('Greetings!')
//     }
// }

// myCity.cityGreeting()


const post = {
    title: 'My Post',
    Namber: 5
}
JSON.stringify(post)

//     > post
// { title: 'My Post', Namber: 5 }
//     > JSON.stringify(post)
// '{"title":"My Post","Namber":5}'
//     > const postStringified = JSON.stringify(post)
// undefined
//     > JSON.parse(postStringified)
// { title: 'My Post', Namber: 5 }