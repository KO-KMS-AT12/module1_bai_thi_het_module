function tryRemoveFrmArray(arr, index) {
    if (arr !== null) {
        for (let i = 0; i < arr.length; i++) {
            if (index === i) {
                arr.splice(index, 1);
            }
        }
    }
    return arr;
}

console.log(tryRemoveFrmArray([12, 6, 3, 7, 21, 5, 7], 2));
console.log(tryRemoveFrmArray([], 2));

