// Add Task
const form = document.querySelector(`form`);
const formInput = document.querySelector(`.form-input`);
const list = document.querySelector(`.tasks`);
const listItems = document.querySelectorAll(`li.task`);

let i = 0;

const addTask = (e) => {
    e.preventDefault();

    const taskName = formInput.value;
    if(taskName === "") return;

    const newItem = document.createElement(`li`);
    newItem.className = `task`;
    newItem.setAttribute(`data-key`, i);
    newItem.innerHTML = taskName + "<button data-key='" + i + "'>Remove</button>";

    list.appendChild(newItem);

    formInput.value = "";

    document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask));

    i++;
}

form.addEventListener('submit', addTask);

// Remove Task
const removeTask = (e) => {
    e.target.parentNode.remove();
}

// Search engine
const input = document.querySelector('#search');
const ul = document.querySelector('.tasks');
const li = document.getElementsByClassName('task');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let arr = [...li];
    arr = arr.filter(item => item.textContent.toLowerCase().includes(searchText));
    ul.textContent = null;
    arr.forEach(item => ul.appendChild(item))
}

input.addEventListener('input', searchTask);
