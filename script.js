import dictionary from './dictionary.js';

const answer = 'tangy';

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
        for (let i = 0; i < guess.length; i++) {
            const g = guess[i];
            const a = answer[i];
            if (g === a) {  // correct letter and correct spot
                console.log(`${g} is in the right spot`);
            } else if (answer.includes(g)) { // correct letter and wrong spot
                console.log(`${g} is in the wrong spot`);
            } else { // incorrect letter for word
                console.log(`${g} is not correct`);
            }
        }
    }
};

submitBtn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer(submit.value)
    }
});