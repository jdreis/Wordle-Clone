import dictionary from './dictionary.js';

const answer = dictionary[Math.floor(Math.random() * dictionary.length)];

const previousGuesses = document.querySelector('#switch')

const submitBtn = document.querySelector('#submit');
submit.maxLength = answer.length

const checkAnswer = (guess) => {
    console.clear()
    if (guess.length !== answer.length) {
        console.log('Not long enough');
    } else if (guess === answer) {
        console.log('You Win!');
    } else if (!dictionary.includes(guess)) {
        console.log('Not in the word list')
    } else {
        checkLetters(guess)
    }
};

const checkLetters = (guess, answer) => {
    const previousGuess = document.createElement('p');
    previousGuess.innerText = guess;
    

    for (let i = 0; i < guess.length; i++) {
        
        const g = guess[i];
        const a = answer[i];
const letter = document.createElement('span');
letter.innerText = g;


        if (g === a) {  // correct letter and correct spot
            // console.log(`${g} is in the right spot`);
            letter.style.color = 'green'
        } else if (answer.includes(g)) { // correct letter and wrong spot
            // console.log(`${g} is in the wrong spot`);
            letter.style.color = 'yellow'
        } else { // incorrect letter for word
            // console.log(`${g} is not correct`);
            letter.style.color = 'gray'
        }

        previousGuess.appendChild(letter)
    }
    
    previousGuesses.appendChild(previousGuess);
    input.value = '';
};

submit.addEventListener('input', () => {
    submit.value = submit.value.toUpperCase();
});

submitBtn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer(submit.value)
    }
});

const darkMode = document.getElementById('checkbox');

darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark')
});