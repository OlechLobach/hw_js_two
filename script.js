function makeAllPositive(arr) {
    let hasNegative = arr.some(num => num < 0);
    
    if (hasNegative) {
        return arr.map(num => Math.abs(num));
    } else {
        return "No negative numbers found";
    }
}

// Приклад використання:
let arr1 = [3, -2, 5, 6, -8, 2];
console.log(makeAllPositive(arr1));

let arr2 = [1, 4, 7, 10];
console.log(makeAllPositive(arr2)); 