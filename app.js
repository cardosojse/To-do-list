const inputBox = document.querySelector(".input-text");
const addTask = document.querySelector(".input-submit");
const taskList = document.querySelector(".task-list");


addTask.addEventListener("click", function(){
    if (inputBox === ''){
        alert('Você deve escrever algo!')
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        document.querySelector(".task-data").style.display = "none";
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    typeTask.value = '';
    saveData();
});

taskList.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function getData(){
    taskList.innerHTML = localStorage.getItem("data");
}

getData();