const clickButton = document.querySelector('.forecast-btn');
const currentElement = document.querySelector('.current-forecast');
const currentElementHeader = currentElement.querySelector('h1');
const currentElementText = currentElement.querySelector('p');
const elementTemplate = document.querySelector('#forecast-item');
const forecasts = document.querySelector('.forecasts');


function clickOnMe() {

    const predictionNumber = getRandomInt(5);
    const percentNumber = getRandomInt(101);

    makePredictionItem(predictionNumber, percentNumber);
}

function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

function makeElementTemplate(number, percent) {
    const newElement = elementTemplate.content.cloneNode(true);

    newElement.querySelector('h3').textContent = number;
    newElement.querySelector('p').textContent = percent;

    return newElement;
}

function makePredictionItem(number, percent) {

    if (currentElementHeader.textContent != '') {
        const forecastsElement = makeElementTemplate(currentElementHeader.textContent, currentElementText.textContent);
        forecasts.prepend(forecastsElement);
    }

    if (number == 0) {
        currentElementHeader.textContent = 'Вы — на верном пути!';
    } else if (number == 1) {
        currentElementHeader.textContent = 'То, к чему Вы стремитесь, стоит ваших усилий';
    } else if (number == 2) {
        currentElementHeader.textContent = 'Счастье уже стоит за дверью.';
    } else if (number == 3) {
        currentElementHeader.textContent = 'Улыбайся! Кто-то сходит с ума от твоей улыбки';
    } else {
        currentElementHeader.textContent = 'Поделись с любимым мечтами, и они обязательно сбудутся';
    }

    currentElementText.textContent = `${percent}%`;

}

clickButton.addEventListener('click', clickOnMe);