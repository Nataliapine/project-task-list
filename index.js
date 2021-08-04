https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo

//Criar uma nova tarefa quando clicar no botao +
function addNewTask() {
    let newTask = document.createElement("li");
    let inputValue = document.getElementById("taskName").value;
    let text = document.createTextNode(inputValue);
    newTask.appendChild(text);

    if(inputValue === '') {
        alert('You must write something!')
    }else {
        document.getElementById("myList").appendChild(newTask);
    }
    document.getElementById("taskName").value = "";

    let buttonDelete = document.createElement("BUTTON");
    let buttonIcon =  document.createTextNode("\u00D7");
    buttonDelete.className = "close";
    buttonDelete.appendChild(buttonIcon);
    newTask.appendChild(buttonDelete);

    // let span = document.createElement("SPAN");
    // // let icon = document.getElementById("iconButtonDelete").value;
    // let icon = document.getElementsByClassName("fas fa-trash-alt").value;
    // let button =  document.createTextNode(icon);
    // span.className = "close";
    // span.appendChild(button);
    // newTask.appendChild(span);
    

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
      }
};

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

