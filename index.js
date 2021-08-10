// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo

//Criar uma nova tarefa quando clicar no botao +
function addNewTask() {
    let newTask = document.createElement("li");
    let inputValue = document.getElementById("taskName").value;
    let text = document.createTextNode(inputValue);
    let erro = document.getElementById("error")
    newTask.appendChild(text);

    if(inputValue === '') {
      erro.textContent = "Please, write a task name."
    }else {
        document.getElementById("myList").appendChild(newTask);
    }
    document.getElementById("taskName").value = "";
   
    let checkboxElement = document.createElement("INPUT");
    checkboxElement.setAttribute("type", "checkbox")
    let list = document.createElement("li");
    let linkElement = document.createElement("i");
    
    linkElement.setAttribute('class', 'fas fa-trash-alt')
    linkElement.className = "fas fa-trash-alt";
    linkElement.appendChild(checkboxElement);
    linkElement.appendChild(list);
    newTask.appendChild(linkElement);
   
};



