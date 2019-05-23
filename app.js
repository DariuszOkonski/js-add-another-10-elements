const btnAdd = document.querySelector('button.add');
const btnClear = document.querySelector('button.clear');
const ul = document.querySelector('ul');

let iteration = 1;
let fontSize = 10;

btnAdd.addEventListener('click', function () {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.textContent = `element ${iteration}`;
    li.style.fontSize = fontSize + 'px';
    ul.appendChild(li);

    iteration++;
    fontSize++;
  }
});

btnClear.addEventListener('click', function () {
  ul.textContent = '';
  iteration = 1;
  fontSize = 10;
});