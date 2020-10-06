/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

   HINT: no function required
*/

const votingAge = 17;
console.log(votingAge>=18);

/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/


let var1 = 21;
const var2 = 'I';

if (var2==='I') {
  var1 = 'Ok';
} else {
  var1 = 'Not Ok';
}

console.log(var1);

/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/

const user_str = "1999";
let converted = parseInt(user_str);
console.log(converted-1);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a,b){
  return a * b;
}

console.log(multiply(2,4));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(humanAge){
  return humanAge * 7;
}

console.log(dogYears(21));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weight_value, age_value){
  let food_value;

  if (age_value >= 1) {

    if (weight_value <= 5) {

      food_value = weight_value * 0.05;

    } else {

      if(weight_value <= 10) {

        food_value = weight_value * 0.04;

      } else {

        if(weight_value <= 15) {

          food_value = weight_value * 0.03;

        } else {

          food_value = weight_value * 0.02;

        }
      }
    }
  } else {
    if (age_value < (4/12)) {

      food_value = weight_value * 0.1;

    } else {
      
      if (age_value < (7/12)) {

        food_value = weight_value * 0.05;

      } else {

        if (age_value < 1) {

          food_value = weight_value * 0.04;

        }
      }
    }
  }

  return food_value;
}

console.log(hungryDog(15,1));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Use the game function below to do the following:
  1. Receive a string that represents the user's choice (either "rock", "paper", or "scissors")
  2. Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
  3. Return whether the user won, lost, or tied based on these rules of the game described below
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/

let computer_choise = Math.random();
let computer_string = null;
if (computer_choise > 0 && computer_choise < (1/3)){
      computer_string = 'rock';
    }
if (computer_choise > (1/3) && computer_choise < (2/3)){
      computer_string = 'paper';
    }
if (computer_choise > (2/3) ){
      computer_string = 'scissors';
    }

function game(user_string, computer_string){
  let result = null;
    
  //game

  if (computer_string === user_string) {
    result = "it's a tie";
  } else {
    if (user_string === 'rock') {
      if (computer_string === 'paper') {
        result = 'you lose!';
      } else {
        result = 'you win!';
      }
    } else {
      if (user_string === 'paper') {
        if (computer_string === 'rock') {
          result = 'you win!';
        } else {
          result = 'you lose!';
        }
      } else {
        if (computer_string === 'rock') {
          result = 'you lose!';
        } else {
          result = 'you win!';
        }
      }
    }
  }

  return result;
}

console.log(game('rock', computer_string));
  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(metric_system){
  return metric_system * 0.621371;
}

console.log(miles(16));


//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(island_system){
  return island_system / 30.48;
}

console.log(feet(1));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/

function annoyingSong(starting_number){
  for (starting_number; starting_number > 0; starting_number--) {
    return `${starting_number} bottles of soda on the wall, ${starting_number} bottles of soda, take one down pass it around ${starting_number-1} bottles of soda on the wall`;
  }
}

console.log(annoyingSong(5));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/
  
function grade(score){
  let result = null;
  if (score < 60) {
    result = 'you got a F';
  }
  if (score < 70 && score >= 60) {
    result = 'you got a D';
  }
  if (score < 80 && score >= 70) {
    result = 'you got a C';
  }
  if (score < 90 && score >= 80) {
    result = 'you got a B';
  }
  if (score < 100 && score >= 90) {
    result = 'you got a A';
  }
  return result;
}
  
  
console.log(grade(76));  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(user_string) {
  let count=0;
  for(let i=0; i < user_string.length; i++) {
    if (user_string.charAt(i) === 'a' || user_string.charAt(i) === 'A' || user_string.charAt(i) === 'e' || user_string.charAt(i) === 'E' || user_string.charAt(i) === 'i' || user_string.charAt(i) === 'I' || user_string.charAt(i) === 'o' || user_string.charAt(i) === 'O' || user_string.charAt(i) === 'u' || user_string.charAt(i) === 'U' || user_string.charAt(i) === 'y' || user_string.charAt(i) === 'Y') {
      count++;
    }
  }
  return count;
}

console.log(vowelCounter("Iaroslav"));



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
