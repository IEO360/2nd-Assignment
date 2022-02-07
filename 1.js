//Get random input values between 1 and 6 inclusively
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Display the two random input values
let dice1 = randomInt(1, 6);
let dice2 = randomInt(1, 6);
console.log(dice1);
console.log(dice2);

//Sum of the two integers
let sum = dice1 + dice2;

//Conditions for the sum being greater than or equalling 10
if (sum >= 10) {
    paymentType = 'Special Tax';
    paymentAmount = 36;
}
//otherwise
else{
    paymentType = 'Regular Tax';
    paymentAmount = sum * 2;
}

//Display the results for the given conditions
console.log(paymentType);
console.log(paymentAmount);