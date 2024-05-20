const form = document.querySelector('form');
const todoInput = form.todo;
const ul = document.querySelector('ul');
const p = document.querySelector('p')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const li = document.createElement('li');
    if(todoInput.value){
        li.innerHTML = todoInput.value;
    ul.append(li)

    p.style.display = 'none';
    const btn = document.createElement('button');
    btn.classList.add('custom')
    btn.innerHTML = 'DELETE'
    btn.addEventListener('click', function(){
        ul.removeChild(li)
    })
    li.append(btn)
    todoInput.value = "";
    }

})