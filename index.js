function addNewTask(e) {
  console.log('e: ', e);
  debugger;
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
  document.getElementById("myList").appendChild(clone);
  document.getElementById("taskName").value = ""; 

  // return false;
}

function removeTask(icon) {
  icon.parentElement.remove();
}

