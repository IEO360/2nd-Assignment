//Define a function to get a random number
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Initialize variable to get a random number between 1 and 100 inclusive
let myNum = randomNum(0, 100);

//Display the random number
console.log(myNum);

//Loop to keep selecting numbers randomly until the desired range of numbers is obtained
for (let n = 0; n<= 100; n++) {
    if (myNum > 70) {
        display = "guess too high. Try again"; //Condition is that the number selected is higher than the desired range wanted
    } else if (myNum < 31) {
        display = "guess too low. Try again"; //Condition is that the number selected is lower than the desired range wanted
    } else {
        display = `Your guess was correct after ${n} attempts`; //Condition is that the number selected is within the desired range wanted
        break; //Stop the loop process
    }
}

//Display comment based on the number guessed
console.log(display);


