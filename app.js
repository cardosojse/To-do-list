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
        
        // Condição que remove o template
        if (li.innerHTML !== ''){
            document.querySelector(".task-data").style.display = "none";
        }
    }
    inputBox.value = '';
    saveData();
});

taskList.addEventListener("click", function(click){
    if (click.target.tagName === "LI"){
        click.target.classList.toggle("checked");
    }else if (click.target.tagName === "SPAN"){
        click.target.parentElement.remove();
    }
});

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function getData(){
    taskList.innerHTML = localStorage.getItem("data");
}

getData();