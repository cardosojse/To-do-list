const inputBox = document.querySelector(".input-text");
const addTask = document.querySelector(".input-submit");
const taskList = document.querySelector(".task-list");
const itemList = [];

addTask.addEventListener("click", function(){
    if (inputBox.value === ''){
        alert('O campo está vazio!');
    }else{
        itemList.push(inputBox.value);

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    removeDiv();
    saveData();
});

taskList.addEventListener("click", function(userClick){
    if (userClick.target.tagName === "LI"){
        userClick.target.classList.toggle("checked");
    }else if (userClick.target.tagName === "SPAN"){
        userClick.target.parentElement.remove();
        itemList.pop();
    }
    removeDiv();
    saveData();
});

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function getData(){
    taskList.innerHTML = localStorage.getItem("data");
}

function removeDiv(){
    if (itemList.length > 0){
        document.querySelector(".task-data").style.display = "none";
    }else{
        document.querySelector(".task-data").style.display = "grid";
    }
}

getData();