function sumOfMultiplesOfThree(arr) {
    return arr
        .filter(num => num > 0 && num % 3 === 0)  // Фільтруємо додатні числа, кратні 3
        .reduce((sum, num) => sum + num, 0);     // Знаходимо їхню суму
}

// Приклад використання:
let arr3 = [3, 5, -9, 7, 2, 8, 10, -6];
console.log(sumOfMultiplesOfThree(arr3)); // Виведе: 3

let arr4 = [6, 9, -12, 15, 4];
console.log(sumOfMultiplesOfThree(arr4)); // Виведе: 30