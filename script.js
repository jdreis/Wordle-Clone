import dictionary from './dictionary.js';

const answer = dictionary[Math.floor(Math.random() * dictionary.length)];

const previousGuesses = document.querySelector('#track-guess');

const submitBtn = document.querySelector('#submit');
submit.maxLength = answer.length;

const info = document.querySelector('#info');

const replayBtn = document.querySelector('#btn');
replayBtn.style.visibility="hidden";

const checkAnswer = (guess) => {
    if (guess.length !== answer.length) {
        info.innerText = 'Not long enough';
    } else if (guess === answer) {
        info.innerText = 'You Win!';
        info.style.color = '#0f0'
        const correctAnswer = document.createElement('p')
        correctAnswer.style.color = '#0f0'
        previousGuesses.appendChild(correctAnswer);
        correctAnswer.innerText = answer;
        document.body.removeChild(submit)
        replayBtn.style.visibility = 'visible'
    } else if (!dictionary.includes(guess)) {
        info.innerText = 'Not in the word list';
    } else {
        info.innerText = '';
        checkLetters(guess);
        if (previousGuesses.children.length === 6) {
            info.innerText = `You Lose. \n \n The word was ${answer}.`;
            document.body.removeChild(submit);
            replayBtn.style.visibility = 'visible';
        };
    };
};

const checkLetters = (guess) => {
    const previousGuess = document.createElement('p');
    

    for (let i = 0; i < guess.length; i++) {
        const g = guess[i];
        const a = answer[i];

    const letter = document.createElement('span');
    letter.innerText = g;

        if (g === a) {  // correct letter and correct spot
            letter.style.color = 'green';
        } else if (answer.includes(g.length)) { // correct letter and wrong spot   
            letter.style.color = 'yellow';
        // } else if () {
        //     letter.style.color = 'gray'
        } else  { // incorrect letter for word
            letter.style.color = 'gray';
        }
        previousGuess.appendChild(letter);
    };
    
    previousGuesses.appendChild(previousGuess);
    submit.value = '';

};

submit.addEventListener('input', () => {
    submit.value = submit.value.toUpperCase();
});

submitBtn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer(submit.value)
    }
});



// dark/light toggle

// const lightMode = document.getElementById('checkbox');

// lightMode.addEventListener('change', () => {
//     document.body.classList.toggle('light')
// });