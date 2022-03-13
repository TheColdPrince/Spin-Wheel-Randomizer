const spinner = document.querySelector('.spinner');
const startBtn = document.querySelector('.spinner__start-button');
const input = document.querySelector('.spinner__input');
let plate = document.querySelector('.spinner__plate');
let items = [...document.getElementsByClassName('spinner__item')];

input.addEventListener('change', e => {
  if (input.value === '' || +input.value < 1) {
    input.value = 1;
  }
  if (+input.value > input.max) {
    input.value = input.max;
  }
});

startBtn.addEventListener('click', function () {
  randomizeItems();
  if (!plate.classList.contains('spinner__plate--spin')) {
    plate.classList.add('spinner__plate--spin');
  } else {
    const currPlate = plate;
    const newPlate = plate.cloneNode(true);
    currPlate.parentNode.replaceChild(newPlate, currPlate);
    plate = newPlate;
    items = [...document.getElementsByClassName('spinner__item')];
  }
});

function randomizeItems() {
  items.forEach(item => {
    const rand = random(1, +input.value);
    item.textContent = rand;
  });
}

function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}