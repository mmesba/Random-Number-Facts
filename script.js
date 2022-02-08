let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#number-input');

numberInput.addEventListener('input', getFactAjax);
