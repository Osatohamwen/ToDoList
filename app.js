const newTaskInput= document.querySelector("#wrapper input");
const taskContainer = document.getElementById("tasks");
const btnTask = document.getElementById("btn-tasks");
const error = document.getElementById("error");
const countValue = document.getElementById("count-value");
const pendingTask = document.getElementById("pending-tasks");
const taskDone = document.getElementById("task-done")
const completedTask = document.getElementById("completed-task")

let taskCount = 0;

/* local storage*/
function getItems(){
    const value = localStorage.getItem("todo") || "[]";
    return JSON.parse(value);
}
/* local storage end*/

const displayCount = (taskCount) => {
    countValue.innerText = taskCount;
};

const addTask = () => {
    const taskName = newTaskInput.value.trim();
    if (!taskName){
        alert("Do not leave it blank");
        return;
        
    } else{
        newTaskInput.value = "";
        pendingTask.style.display = "flex";
        taskCount += 1;
        displayCount(taskCount);

    }

    const task = `<div class="content-wrap">
        <span>${taskName}</span>
        <button class="check">
        <i class="fa-solid fa-check" id="i"></i>
        </button>
        <button class="delete">
        <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>`;
    taskContainer.insertAdjacentHTML
    ("beforeend", task);

    function deletebtn(){
        const deleteButton = document.querySelectorAll(".delete");
        deleteButton.forEach((button) => {
        button.onclick =() => {
           let deleteAlert = confirm("This task will be completely deleted!");
           if(deleteAlert === true){
                button.parentNode.remove();
                taskCount -= 1;
                displayCount(taskCount);

                console.log(deleteAlert)

           } else {
                 button.parentNode;
                 return;
           }
        };
    });

    }
    deletebtn()

    const successfulTask = `<div class="content-done-wrap">
        <span>${taskName}</span>
        <button class="delete">
        <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>`;

    const checkButton = document.querySelectorAll(".check");
    checkButton.forEach((button) => {
        button.onclick =() => {
            taskDone.value = button.parentNode;
            button.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);

            taskDone.insertAdjacentHTML
            ("beforeend", successfulTask);
            completedTask.style.display = "flex";

            deletebtn()

        };
    });
};
btnTask.addEventListener("click", addTask);


window.onload = () =>  {
    taskCount = 0;
    displayCount(taskCount);
    newTaskInput.value = "";
}
