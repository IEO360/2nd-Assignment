//Define a function of multiples
function multiples(number) {
    let sum = 0;
    
  for (x = 0; x < number; x++) { //Loop which increaments x by 1
    if (x % 3 == 0 || x % 5 == 0) //Modulus division of x by 3 or 5
    {
        sum += x; //Sum of the values of x while it keeps inceasing
    }
  }
    return sum;
}

    let sumOfMultiples = multiples(100); 
console.log(sumOfMultiples); //displays sum of multiples less than 100