
const uncompletedTaskItem = document.getElementById("uncompleted-task-item");
const form = document.querySelector("form");
form.addEventListener("submit", addNewTask);
const taskName = document.getElementById("task-name");
taskName.addEventListener("keydown", removeValidatorMessage);

function validationMessageThrower() {
  const error = document.getElementById("error");
  error.innerText = "Please, write a task name.";
  setTimeout(() => error.innerText = "", 3000);
}

function removeValidatorMessage() {
  error.innerText = "";
}

function addNewTask(e) {
  e.preventDefault(); 

  if (!taskName.value) {
    validationMessageThrower();
    return;
  }

  const clone = uncompletedTaskItem.cloneNode(true); 

  clone.removeAttribute("id"); 
  clone.getElementsByTagName("span")[0].innerHTML = taskName.value; 
  document.getElementById("uncompleted-tasks").appendChild(clone);
  document.getElementById("task-name").value = ""; 
}

function removeTask(icon) {
  icon.parentElement.remove();
}

function moveToCompleted(checkbox) {
  const tasks = document.getElementById(checkbox.checked ? "completed-tasks" : "uncompleted-tasks");
  tasks.appendChild(checkbox.parentElement); 
}
