// two ranges overlapping or not ( inclusive )

const startRange1 = 7;
const endRange1 = 3;
const startRange2 = 7;
const endRange2 = 3;

if (endRange1 < startRange2 || endRange2 < startRange1 ) {
    console.log("not over lapping");
} else {
    console.log("over lapping")
}


