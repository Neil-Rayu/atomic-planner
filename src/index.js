//import { startEnd } from "./energyChart";
// doccument.getElementById("click").onclick = function hello() {
//   document.getElementById("click").textContent = "hello";
// };

console.log('hello world');

var date = new Date().toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});
const dateHead = document.createElement('h3');
dateHead.innerHTML = 'Today - ' + date;
document.getElementById('heading').appendChild(dateHead);

const form = document.querySelector("[class='taskForm']");
const inputTask = document.querySelector("[id='task-input']");
const todoList = document.getElementById('todos');

const todoData = [];
const timeData = [];
const locData = [];

function addTodo(todoText) {
  todoData.push(todoText.split(',')[0]);
  timeData.push(todoText.split(',')[1]);
  locData.push(todoText.split(',')[2]);
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  li.appendChild(checkBox);
  li.textContent =
    'I will do ' +
    todoData.at(-1) +
    ' in my ' +
    locData.at(-1) +
    ' when the clock strikes ' +
    timeData.at(-1);
  todoList.appendChild(li);
}

form.onsubmit = (e) => {
  e.preventDefault();
  addTodo(inputTask.value);
};

document.getElementById('add-task').onclick = function openInput() {
  document.getElementById('inner').style.clipPath = 'circle(75%)';
};

document.querySelector("[class='cancel-task']").onclick =
  function closeInput() {
    document.getElementById('inner').style.clipPath = 'circle(0%)';
  };

document.getElementById('bar-menu').onclick = function closeSidebar() {
  document.getElementById('sidebar-wrapper').style.width = '0%';
};
