const carsTarget = document.querySelector('#cars');
const p = document.querySelector('.p');
const button = document.getElementById('button')
const x = document.getElementById["numb"].value;

function HandleClick(){
// document.querySelector('.p').style.marginTop = '100px'
p.classList.toggle('active')
}
button.addEventListener('click',HandleClick)