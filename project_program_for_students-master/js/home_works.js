const gmailInput = document.getElementById('gmail_input')
const gmailButton = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')


const regExp = /[A-Za-z0-9!#$%^&*()_]\@gmail.com$/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'CORRECT'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.textContent = 'INCORRECT'
        gmailResult.style.color = 'red'
    }
})


const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

function move() {
    if (positionX < 448 && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
        setTimeout(move, 10);
    } else if (positionX >= 448 && positionY < 448) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
        setTimeout(move, 10);
    } else if (positionX > 0 && positionY === 448 ) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
        setTimeout(move, 10);
    } else if (positionX >= 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
        setTimeout(move, 10);
    }
}

move();

const seconds = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let count = 0;
let timer;


startBtn.addEventListener('click', function () {
    clearInterval(timer)
    timer = setInterval(function () {
        count++;
        seconds.textContent = count;
    }, 1000);
});

stopBtn.addEventListener('click', function (){
    clearInterval(timer);
})

resetBtn.addEventListener('click', function (){
    clearInterval(timer)
    count = 0;
    seconds.textContent = count;
})


