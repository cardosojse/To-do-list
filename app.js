const inputBox = document.querySelector(".input-text");
const addTask = document.querySelector(".input-submit");
const taskList = document.querySelector(".task-list");

addTask.addEventListener("click", function(){
    if (inputBox.value === ''){
        alert('Você deve escrever algo!');
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        // "X"
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        // Função que remove o template
        removeEmptyTask();
    }
    inputBox.value = '';
    saveData();
});

taskList.addEventListener("click", function(userClick){
    if (userClick.target.tagName === "LI"){
        userClick.target.classList.toggle("checked");
    }else if (userClick.target.tagName === "SPAN"){
        userClick.target.parentElement.remove();
    }
    saveData();
    removeEmptyTask();
});

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function getData(){
    taskList.innerHTML = localStorage.getItem("data");
}

function removeEmptyTask(){
    if (taskList.innerHTML !== ''){
        document.querySelector(".task-data").style.display = "none";
    }else{
        document.querySelector(".task-data").style.display = "grid";
    }
}

getData();