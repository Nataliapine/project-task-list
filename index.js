function addNewTask(e) {
  e.preventDefault();

  const erro = document.getElementById("error");
  const taskName = document.getElementById("taskName").value; 
  const original = document.getElementById("newElement");
  const clone = original.cloneNode(true);

  if(taskName === '') {
    erro.textContent = "Please, write a task name."
    return;
  };

  clone.removeAttribute("id");
  clone.getElementsByTagName("span")[0].innerHTML = taskName; 
  document.getElementById("uncompletedTasks").appendChild(clone);
  document.getElementById("taskName").value = ""; 
}

function removeTask(icon) {
  icon.parentElement.remove();
}

function moveToCompleted(checkbox) {
  const tasks = document.getElementById(checkbox.checked ? "completedTasks" : "uncompletedTasks"); 
  tasks.appendChild(checkbox.parentElement);
}
