const typeTask = document.querySelector(".input-text");
const addTask = document.querySelector(".input-submit");
const taskList = document.querySelector(".task-list");


addTask.addEventListener("click", function(){
    if (typeTask.value === ''){
        alert('Você deve escrever algo!')
    }else{
        let li = document.createElement("li");
        li.innerText = typeTask.value;
        taskList.appendChild(li);
        document.querySelector(".task-data").style.display = "none";
    }
    typeTask.value = '';
    saveData();
});

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function getData(){
    taskList.innerHTML = localStorage.getItem("data");
    document.querySelector(".task-data").style.display = "none";
}

getData();