// Conditional Statements

if (1 === 1) {
    console.log("It is true")
}


let rating = 0;

if (rating === 3) {
    console.log("It is a goal")
}
else if (rating === 2) {
    console.log("MEETS EXPECTATION")
}
else if (rating === 5) {
    console.log("You are too over a score")
}
else {
    console.log("You are not fit")
}

function findLargest(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is the greatest number`)
    }

    else if (num1 < num2) {
        console.log(`${num1} is the largest`)
    }
    else {
        console.log(`${num1} is equal to ${num2}`)
    }

}
    findLargest(45,45)