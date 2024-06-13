//Conditional Statements//
//temperature check//
 
function checkTemperature(temperature)
{
    if (temperature < 0) {
        console.log("lt's freezing!");
    }
      
    else if ( temperature >= 0 && temperature <= 15) {
        console.log("lt's cold");
    }
     
    else if ( temperature >= 16 && temperature <= 25) {
        console.log("lt's mild");
    }

    else {
        console.log("it's warm")
    }
}

//test//
checkTemperature(-3)
checkTemperature(7)
checkTemperature(26)
checkTemperature(30)
 
//switch//
function checkTemperatureSwitch(temperature) {
    switch (true) {
        case (temperature < 0):
            console.log("It's freezing!");
            break;

        case (temperature >= 0 && temperature <= 15):
            console.log("It's cold.");
            break;

        case (temperature >= 16 && temperature <= 25):
            console.log("It's mild.");
            break;

        case (temperature > 25):
            console.log("It's warm.");
            break;

    }   
} 
//test//
checkTemperature(-3)
checkTemperature(7)
checkTemperature(26)
checkTemperature(30)

// Divisibility Check//
 
function checkDivisibility( number) {
if(number % 2 === 0 && number % 3 === 0){
    console.log("Divisible by both");
}

else if(number % 2 === 0){
    console.log("Divisible by 2");
}

else if(number % 3 === 0){
    console.log("Divisible by 3");
}

else{
    console.log("Not divisible by both");
  }
} 

//test//
checkDivisibility(31)
checkDivisibility(5)
checkDivisibility(22)
checkDivisibility(20)

//Switch//

function checkTemperatureSwitch(number) {
    switch (true) {
        case (number % 2 === 0 && number % 3 === 0):
            console.log("Divisible by both");
            break;

        case (number % 2 === 0):
            console.log("Divisible by 2");
            break;

        case (number % 3 === 0):
            console.log("Divisible by 3");
            break;

        default:
            console.log("Not divisible by both");
    }
}

// While loops//

for (let i = 1; i <= 10; i++)
    { console.log(i)}

for (let i = 2; i <= 20; i += 2)
    { console.log(i)}

let sumTotal = 0;
for (let i = 1; i <= 100; i++)
    {sumTotal += i}
console.log(sumTotal)

const numberS1 =[1, 2, 3, 4, 5]
for (let i =  0; i < numberS1.length; i++ )
    { console.log(numberS1[i])}

const numberS2 = [3, 7, 2, 5, 10, 6]
let largest = numberS2[0];

for(let i = 1; i< numberS2.length; i++)
    {
    if(numberS2[i]> largest)
        {largest = numberS2[i]}
    
}

console.log(largest)

//Do While loops//

let print = "";
let l1 = 0

do {
    l1 = l1 + 1;
    print = print + l1
} 
while (l1 < 10)
    console.log(print)
 
let l2 = 1;
let print2 = 0
do { print2 += l2;
    l2++} 

while (l2 <= 100)

    console.log(print2);
 
    let numberUse;
    do {
        numberUser = parseInt(prompt("enter a number greater than 10",10));
    } while (numberUser <= 10)
    console.log(numberUser);
    
    const targetNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
    if (guess < targetNumber) {
        console.log("Go again it's low");
    } else if (guess > targetNumber) {
        console.log("Too high keep trying");
    } else if (!isNaN(guess)) {
        console.log("It's correct well done", targetNumber);
    }
} while (guess !== targetNumber);
            
             
            