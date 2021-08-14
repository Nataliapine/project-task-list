function addNewTask(e) {
  e.preventDefault(); //to add new task when click in enter.0

  const erro = document.getElementById("error"); 
  const taskName = document.getElementById("taskName").value; 
  const original = document.getElementById("newElement"); 
  const clone = original.cloneNode(true); //creat a copy of new element but without ID.

  /**
   * TODO:
   * 1-put time out for error message
   * 2- erase message if user input is before time out
   * 
   */
  
  if(taskName === '') {
    erro.textContent = "Please, write a task name."
    setTimeout(function() {
      document.getElementById("error").style.display = 'none';
  }, 3000);
    return;
  };

  clone.removeAttribute("id"); //remove the list id.
  clone.getElementsByTagName("span")[0].innerHTML = taskName; //put the text of task.
  document.getElementById("uncompletedTasks").appendChild(clone);
  document.getElementById("taskName").value = ""; //remove name of the task after creat new task.
}

function removeTask(icon) {
  icon.parentElement.remove();
}

function moveToCompleted(checkbox) {
  const tasks = document.getElementById(checkbox.checked ? "completedTasks" : "uncompletedTasks"); 
  tasks.appendChild(checkbox.parentElement); //when clicked in checkbox the task go to completed tasks.
}
