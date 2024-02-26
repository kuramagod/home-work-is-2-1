let List_module = (array) => {
    let list = [];
    let module = prompt(`Введите значения модуля числа, для списка [${array}].`);
    
    for (let num of array) {
        if ( Math.abs(num) <= Math.abs(module)) {
            list.push(num);
        }
    }

    for (let num of list) {
        console.log(num)
    }
    console.log(' ')
}

p = [1, -1, 1.4, 2, 2.5, -2, 3, -3, 4, -4, 5, 6]
h = [100, 101.1, 300]

List_module(p);
List_module(h);