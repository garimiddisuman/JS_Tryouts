// to find biggest number among three numbers using ternary opetator..

const a = 100;
const b = 24;
const c = 18;

let big = a > b ? a : b;
    big = c > big ? c : big; 

console.log(big);