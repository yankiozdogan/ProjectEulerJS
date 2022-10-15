/*
If we list all the natural numbers below 10
that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

/*
This function takes a number 'num' and two other 'mult1', 'mult2' to check and sum the multiples
*/

function multipleSumFinder(num, mult1, mult2) {
    let k = 0;
    for (let i = 1; i < num; i++) {
        if (i % mult1 == 0 | i % mult2 == 0) {
            k += i;
        }
    }
    return k;
};

console.log(multipleSumFinder(1000, 3, 5));