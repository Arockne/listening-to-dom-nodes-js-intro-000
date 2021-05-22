// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

main.addEventListener('click', event => alert('I was clicked!'));

const input = document.querySelector('input');
input.addEventListener('keydown', e => {
 return e.key === 'g' ? e.preventDefault() : console.log(e.key);
});

let divs = document.querySelectorAll('div');

function bubble(e) {
  e.stopPropagation();
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble)
}

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}

function changeColor(event) {
  this.style.backgroundColor = 'red';
}

function changeColor2(event) {
  this.style.backgroundColor = 'white';
}

for (let div of divs) {
  div.addEventListener('mouseover', changeColor);
}

for (let div of divs) {
  div.addEventListener('mouseout', changeColor2);
}

let element = document.createElement('div');
element.innerHTML = 'Here is a new div';