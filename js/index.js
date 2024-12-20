// 1
const bankAccount = {
    ownerName: "Vlad",
    accountNumber: 65,
    balance: 0,
    deposit(amount){
        if(amount > 0){
            this.balance += amount
            console.log(`Депозити успішний. Новий баланс ${this.balance}`)
        } else {
            console.log("недіійсна сума депозиту")
        }
    },
    withdraw(amount){
        if(amount > 0){
            this.balance -= amount
            console.log(`Успішно зняли гроші, на рахунку: ${this.balance}`)
        } else if(amount > this.balance){
            console.log(`на рахунку не достатньо коштів, `)
        } else{
            console.log("недійсна сума зняття")
        }
    }
}
bankAccount.deposit(100)
bankAccount.withdraw(40)
bankAccount.withdraw("nkggk")

// 2

const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    isTemperature(){
        return this.temperature < 0
    }
}

function checkTemperature(tempInput){
    weather.temperature = parseFloat(tempInput)
if (weather.isTemperature()){
    console.log("температура нижче 0 градусів Цельсія")
} else{
    console.log("температура вище 0 градусів Цельсія")
}
}
checkTemperature(-6)
checkTemperature(30)

// 3

const user = {
    name: "user02",
    email: "user02@example.com",
    password: "123456",
    login(inputEmail, inputPassword) {
        return this.email === inputEmail && this.password === inputPassword;
    }
};
function login() {
    const inputEmail = "user02@example.com";
    const inputPassword = "123456";

    if (user.login(inputEmail, inputPassword)) {
        console.log("Вхід успішний " + user.name);
    } else {
        console.log("Неправильна адреса електронної пошти або пароль");
    }
}
login();

// 4

const movie = {
    title: "white",
    director: "Ilon Mask",
    year: "2010",
    rating: 8.8,
    isHighRated() {
        return this.rating > 8;
    }
}

console.log(`title ${movie.title}`)
console.log(`director ${movie.director}`)
console.log(`year ${movie.year}`)
console.log(`rating ${movie.rating}`)
if (movie.isHighRated()) {
    console.log("Фільм високо оцінений");
} else {
    console.log("Фільм має середній рейтинг");
}