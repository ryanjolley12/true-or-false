// TODO: Create an array with five question objects
var questions = [
    { q: 'Trees are pink.', a: 'f'},
    { q: 'There are 6 days in a week.', a: 'f'},
    { q: 'Lettuce is a vegetable.', a: 't'},
    { q: 'Water is made up of H2O.', a: 't'},
    { q: 'Rocks are animals', a: 'f'}
];
// TODO: Create a variable to keep track of the score
var score = 0

// TODO: Iterate over the questions array and display each question in a confirmation box
for (var i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i].q);

// TODO: Check the user's answer against the correct answer
if (
    (answer === true && questions[i].a === 't') ||
    (answer === false && questions[i].a === 'f')
    ) {
        score++;
        alert('correct!');
    } else {
        alert('wrong!');
    }
}
// TODO: Alert the user if they are correct or wrong. Increment the score accordingly

// TODO: At the end of the game, alert the user with the final score
alert('you got' + score + '/' + questions.length);