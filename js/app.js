const input = document.querySelector('input')
const list = document.querySelector('.list');
const todoAdd = document.querySelector('.todo__add')


function addItem () {
    const box =document.createElement('div');
    box.classList.add('box');
    list.appendChild(box);
const item = document.createElement('li');
item.innerText = input.value;
box.appendChild(item);
item.classList.add('box__item');
const trash = document.createElement('i');
box.appendChild(trash);
trash.classList.add('fa');
trash.classList.add('fa-times-circle');
input.value = "";
trash.addEventListener('click', function removeItem () {
box.removeChild(item);
box.removeChild(this);
});}

todoAdd.addEventListener('click', addItem);