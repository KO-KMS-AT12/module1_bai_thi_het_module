function findMinScore(arr) {
    let min = arr[0];
    if (arr !== null) {
        for (let value of arr) {
            if (min > value) {
                min = value;
            }
        }
    }
    return min;
}

console.log(findMinScore([]))
console.log(findMinScore([10, 5, 2, 8, -1, 6, 8]));