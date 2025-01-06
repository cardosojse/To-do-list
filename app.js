const inputBox = document.querySelector(".input-text");
const addTask = document.querySelector(".input-submit");
const taskList = document.querySelector(".task-list");
const taskCounter = document.querySelector(".task-counter");

const tasks = [];

addTask.addEventListener("click", function () {
  if (!inputBox.value) {
    return;
  } else {
    let input = inputBox.value;
    tasks.push(input);
    taskCounter.innerHTML++;

    let li = document.createElement("li");
    li.innerHTML = input;
    taskList.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  removeDiv();
  saveData();
});

taskList.addEventListener("click", function (userClick) {
  if (userClick.target.tagName === "LI") {
    userClick.target.classList.toggle("checked");
  } else if (userClick.target.tagName === "SPAN") {
    userClick.target.parentElement.remove();
  }
  taskCounter.innerHTML--;
  removeDiv();
  saveData();
});

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function getData() {
  taskList.innerHTML = localStorage.getItem("data");
}

function removeDiv() {
  if (taskList.innerText === "") {
    document.querySelector(".task-data").style.display = "grid";
  } else {
    document.querySelector(".task-data").style.display = "none";
  }
}

function loadStuff() {
  getData();
  removeDiv();
}
