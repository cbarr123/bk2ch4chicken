for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("chickenmonkey") // multiples of 5 and 7
     } else if (currentNumber % 7 === 0) {
        console.log("monkey") //multiples of 7
     } else if (currentNumber % 5 === 0) {
         console.log("chicken") //multiples of 5
     } else {console.log(currentNumber)}
}
