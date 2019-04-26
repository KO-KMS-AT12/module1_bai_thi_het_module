function isPrime(number) {
    if(!isNaN(number)){
        if (number < 2) return false;
        else {
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return false;
            }
        }
        return true;
    }

}
console.log(isPrime(12));
console.log(isPrime(17));
console.log(isPrime('b'));