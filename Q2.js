//guesssing number game
let guessnum;
window.onload = startGame; 
function start()
{
    guessnum = Math.floor(Math.random() * 100) + 1;
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = '';
}
function guess()
{
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const feedbackElement = document.getElementById('feedback');
    if(userGuess==guessnum)
    {
        feedbackElement.textContent = 'Congratulations! You guessed it right.';
    }
     if(userGuess<guessnum)
     {
        feedbackElement.textContent = 'Try again the number is higher.';
     }
     if(userGuess>guessnum)
     {
        feedbackElement.textContent = 'Try again the number is lower.';
     }
}