// 1. Create a multidimensional array to hold quiz questions and answers
const questionAnswers = [
  ['How many days are in a week?', '7'],
  ['What vegetable is long and orange?', 'Carrot'],
  ['What do apples grow on?', 'Trees' ]
];

const correctQuestions = [];
const incorrectQuestions = [];


// 2. Store the number of questions answered correctly

let score = 0;
let numberOfQuestions = questionAnswers.length;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for ( i = 0; i < questionAnswers.length; i++ ) {
  
  const answer = prompt(`${questionAnswers[i][0]}`);
  
  if ( answer.toLowerCase === questionAnswers[i][1].toLowerCase ) {
    score++;
    correctQuestions.push(`${questionAnswers[i][0]}`);
  } else if ( answer === '' ) {
    i--;
    alert( 'Please type an answer.' );
  } else {
    incorrectQuestions.push(`${questionAnswers[i][0]}`);
  }
}

let message = `<h1>You got ${score} out of ${numberOfQuestions} correct.</h1>`;

document.querySelector('main').innerHTML = message;


// 4. Display the number of correct answers to the user