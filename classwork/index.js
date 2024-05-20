// const h1Tags = document.getElementsByTagName('h2');
// console.log(h1Tags)
// const h1Second = document.getElementById('h1-second')
// console.dir(h1Second)
// const classes = document.getElementsByClassName('first')
// console.log(classes)
// const label = document.getElementsByName('[name=email]')
// console.log(label)
// const qs = document.querySelector('.first');
// console.log(qs)

const fDiv = document.getElementById('firstDiv');
const form =document.querySelector('form');
const emailInput = form.email;
const body = document.querySelector('body');
// fDiv.classList.add('custom')
emailInput.addEventListener('keydown',function(e){
    var h1 = document.createElement('h1');
    h1.innerHTML = emailInput.value;
    body.prepend(h1);

})
const inputField = document.querySelector('[name=email]');
console.log(inputField)