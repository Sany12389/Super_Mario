const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
mario.classList.add('jump');

setTimeout(() => {
    mario.classList.remove('jump');
}, 500);
}

const loop = setInterval(() => {
    const pipe = document.querySelector('.pipe');
    const pipePosition = pipe.offsetLeft;
    const marioPosition = mario.offsetBottom;
    
    console.log(pipePosition);

    if (pipePosition <= 120) {
        if (pipePosition > 0 && marioPosition < 80) {
            // Game Over
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);
        } else {
            // Player is safe
        }
    }
}, 10);

document.addEventListener('keydown', jump);