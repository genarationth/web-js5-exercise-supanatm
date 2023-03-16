// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
const dcrVal = (val, dcr) => {
    while (val > 0) {
        val -= dcr;
        console.log(val);
    }
}
dcrVal(10, 0.5);
console.log("-------------");

// // - Print all the odd numbers between 1 - 100.
const odd = (i, num) => {
    while (i <= num) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }
}
odd(0, 100)
console.log("-------------");

// - Write a method with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
const square = (i, n) => {
    if (i === 0) {
        i++;
    }
    while (i <= n) {
        console.log(`[${i}]`);
        i++
    }
}
square(1, 6);
console.log("-------------");

// - Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
const sum = (n) => {
    let i = 0;
    let tmp = 0;

    while (i <= n) {
        tmp += i;
        i++;
    }
    console.log(tmp);
}
sum(5);