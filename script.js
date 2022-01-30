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
        info.style.color = 'rgb(24, 206, 24)'
        const correctAnswer = document.createElement('p')
        correctAnswer.style.color = 'rgb(24, 206, 24)'
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

    const charCounts = {};

    for (let i = 0; i < answer.length; i++) {
        const c = answer[i];
        const prev = charCounts[c] || 0;
        charCounts[c] = prev + 1;
    }

    for (let i = 0; i < guess.length; i++) {
        const g = guess[i];
        const a = answer[i];

    const letter = document.createElement('span');
    letter.innerText = g;

        if (g === a) {  // correct letter and correct spot
            letter.style.color = 'rgb(24, 206, 24)';
            charCounts[g]--;
        } else if (charCounts[g]) { // correct letter and wrong spot   
            letter.style.color = 'rgb(233, 147, 42)';
            charCounts[g]--;
        } else { // incorrect letter for word
            letter.style.color = 'rgb(114, 114, 114)';
        };
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
    };
});

// HOW TO PLAY POP-UP
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
};

function closeModal(modal) {
    if (modal == null) return 
    modal.classList.remove('active');
    overlay.classList.remove('active');
};

// dark/light toggle
const lightMode = document.getElementById('checkbox');

lightMode.addEventListener('change', () => {
    document.body.classList.toggle('light')
});