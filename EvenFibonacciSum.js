function fibonacciEvenSum(num) {
    let arrFibonacci = [1, 2];
    for (let i = 2; i < num; i++) {
        if (arrFibonacci[i - 1] + arrFibonacci[i - 2] < num) {
            arrFibonacci.push(arrFibonacci[i - 1] + arrFibonacci[i - 2]);
        }
    }
    let k = 0;
    for (let i = 0; i < arrFibonacci.length; i++) {
        if (arrFibonacci[i] % 2 == 0) {
            k = k + arrFibonacci[i];
        }
    }
    return k;
};

console.log(fibonacciEvenSum(4e6));