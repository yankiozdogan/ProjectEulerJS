/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/


function primeFactor(num,factorArray) {
    let chunkiestNum = num;
    for (let i = 2; i <= chunkiestNum; i++) {
        if (chunkiestNum % i == 0) {
            if (chunkiestNum / i == 1) {
                factorArray.push(chunkiestNum);
                console.log("Prime Factorization = "+factorArray);
                console.log("Largest Prime = "+chunkiestNum)
                return chunkiestNum,factorArray
            }
            else{
                //console.log("Not prime: "+chunkiestNum+" (divisible by "+i+")")
                factorArray.push(i);
                //console.log(factorArray);
            return primeFactor(chunkiestNum / i,factorArray);
        }
        }
    }
}
primeFactor(5785786278564,[]);





//RANDOM NUMBER TURNED OUT PRIME! 346537591