// Задание 1
console.log("Задание 1")
let list = [ [10, 2], [3, 4], [8, 5] ];

for (let item of list) {
    console.log(`[${item}] количество элементов в массиве = ${item.length}`)
}

let sum = 0;

for (let i in list) {
    for (let j in list[i]) {
        sum += list[i][j];  
    }
}

console.log(`Сумма всех элементов двумерного массива = ${sum}`)

// Задание 2

console.log(" ")
console.log("Задание 2")

let list_2 = [{name:"Тайлер", surname:"Дерден", mood:"позитивный"}, {name:"Роберт", surname:"Полсон", mood:"грустный"}, {name:"Миша", surname:"Лышков", mood:"alohadance"}]

for (let item of list_2) {
    console.log(`Его имя ${item.name} ${item.surname} настроение ${item.mood}`)
    console.log("Смена настроения")
    item.mood = "веселый"
    console.log(`Его имя ${item.name} ${item.surname} настроение ${item.mood}`)
    console.log(" ")
}

// Задание 3

console.log("Задание 3")

const companies = {
    company_1: {
        name: "Valve", 
        employees: {
            emp1: "Юра",
            emp2: "Егор",                
            emp3: "Георгий",
            }
    },
    company_2: {
        name: "riotgame",
        employees: {
            emp1: "Михаил",
            emp2: "Никита",
            emp3: "Станислав",
            }
    }
};

for (let i in companies) {
    console.log(`Компания ${companies[i].name}, сотрудники:`)
    for (let j in companies[i].employees) {
        console.log(companies[i].employees[j])
    }
    console.log(" ")
}