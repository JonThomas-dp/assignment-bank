let tasksContainer = document.querySelector(".tasks-container");
let tasksContentContainer = document.querySelector(".tasks-content-container");
let addTaskButton = document.querySelector(".add-task-button");


document.querySelector(".add-task-button").addEventListener("click", () => {
    let taskItemContainer = document.createElement("div");
    let taskContent = document.createElement("h2");
    let inputTask = document.querySelector(".input-task");
    let taskCheckBox = document.createElement("input")
    let taskTrashBin = document.createElement("i")

    taskContent.classList.add("task-content")
    taskItemContainer.classList.add("task-item-container");
    taskCheckBox.classList.add("task-checkbox")
    
    if(inputTask.value === "") { 
        alert("Please provide text to your task")
    } else {
        taskContent.innerHTML = inputTask.value;
        inputTask.value = ""
        tasksContentContainer.appendChild(taskItemContainer);
        taskItemContainer.appendChild(taskCheckBox);
        taskItemContainer.appendChild(taskContent);
        taskItemContainer.appendChild(taskTrashBin);
    }
    
    taskCheckBox.setAttribute("type", "checkbox")

    taskTrashBin.classList.add("fa-solid")
    taskTrashBin.classList.add("fa-trash-can")

    function completedTaskItem() {
        if (taskCheckBox) {
            taskCheckBox.addEventListener('click', function() {
                if (taskCheckBox.checked === true) {
                    taskContent.style.textDecoration = "line-through"
                } else {
                    taskContent.style.textDecoration = "none"
                }
            });
        } else {
            console.log(Error('fail'));
        }
    }

    function deleteTaskItem() {
        if(taskTrashBin) {
            taskTrashBin.addEventListener('click', function() {
                document.querySelector(".task-item-container").remove()
            })
        }
    }

    completedTaskItem();
    deleteTaskItem();
})
