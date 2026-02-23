const background = document.querySelector('.background');

let bgScore = 0;

const fxColors = [
  `#00ffff`, // aqua
  `#7fffd4`, // aquamarine
  `#f5f5dc`, // beige
  `#ffe4c4`, // bisque
  `#5f9ea0`, // cadetblue
  `#7fff00`, // chartreuse
  `#a9a9a9`, // darkgray
  `#e9967a`, // darksalmon
  `#f8f8ff`, // ghostwhite
  `#f0fff0`, // honeydew
  `#fff0f5`, //lavenderblush
];

function burstBgFx(event) {
  event.target.remove();
  bgScore += 1;
  let scoreText = document.getElementById('score-text')
  scoreText.innerHTML = bgScore;
  scoreText.style.color = `#000000`;
  setTimeout(() => {
    scoreText.style.color = `#fff0f5`;
  }, 3000); // Remove after 3 seconds
}

function createCircle() {
    const circle = document.createElement('div');
    circle.className = 'circle';

    const size = Math.random() * 50 + 10; // Size between 10 and 60px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${Math.random() * 100}vw`;
    circle.style.top = `${Math.random() * 100}vh`;
    circle.style.animationDuration = `${Math.random() * 5 + 5}s`;

    const fxColorsIdx = Math.floor(Math.random() * 11) + 1;
    const color = fxColors[fxColorsIdx];
    circle.style.setProperty('background-color', color);

    circle.addEventListener('click', (event) => {
        burstBgFx(event);
    });

    background.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 10000); // Remove after 10 seconds
}

function createLine() {
    const line = document.createElement('div');
    line.className = 'line';
    
    const length = Math.random() * 100 + 40; // Length between 40 and 140px
    line.style.height = `${length}px`;
    line.style.left = `${Math.random() * 100}vw`;
    line.style.top = `${Math.random() * 100}vh`;
    line.style.animationDuration = `${Math.random() * 5 + 5}s`;

    line.addEventListener('click', (event) => {
        burstBgFx(event);
    });

    background.appendChild(line);

    setTimeout(() => {
        line.remove();
    }, 10000); // Remove after 10 seconds
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`;

    heart.addEventListener('click', (event) => {
        burstBgFx(event);
    });

    background.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove after 5 seconds
}

function createPacman() {
    const pacman = document.createElement('div');
    pacman.className = 'pacman';

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    pacman.style.left = `${innerWidth / (Math.random() * 5 + 1.25)}vw`;
    pacman.style.top = `${innerHeight / (Math.random() * 5 + 1.25)}vh`;
    pacman.style.animationDuration = `${Math.random() * 5 + 5}s`;

    pacman.addEventListener('click', (event) => {
        burstBgFx(event);
    });

    background.appendChild(pacman);

    setTimeout(() => {
        pacman.remove();
    }, 3000); // Remove after 10 seconds
}

// Create circles at intervals
setInterval(createCircle, 1500);
//setInterval(createLine, 3000);
setInterval(createHeart, 10000);
setInterval(createPacman, 50000);
