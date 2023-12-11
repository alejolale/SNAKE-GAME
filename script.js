// define html elements
const board = document.getElementById('game-board');

// Define game variables
let snake = [{x: 10, y: 10}];

//draw game map, snake, food
function draw() {
    board.innerHTML =  '';
    drawSnake();
}

//draw snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
    });
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
}

// create a snake or food cube/div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// set the position of the snake or the food
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow =  position.y;
}

// testing draw function
draw();