let todo=document.getElementById("todo-input");
let addTodoButton=document.getElementById("add-todo");
addTodoButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if(todo.value==""){
        alert("Please enter a todo");
    }
    else{
        let todos=document.getElementById("todos");
        let todoItem=document.createElement("div");
        todoItem.setAttribute("class","todo-item");
        let todoText=document.createElement("span");
        todoText.textContent=todo.value;
        todo.value="";
        todoText.style.fontSize="1.2rem";
        todoItem.appendChild(todoText);
        let delbtn=document.createElement("button");
        delbtn.textContent="Delete";
        todoItem.appendChild(delbtn);
        todos.appendChild(todoItem);
        let donebtn=document.createElement("button");
        donebtn.textContent="Done";
        todoItem.appendChild(donebtn);
        donebtn.addEventListener("click",()=>{
            todoText.style.textDecoration="line-through";
            todoText.style.color="#599b61ff";
            donebtn.style.display='none';
        })
        delbtn.addEventListener("click",()=>{
            todos.removeChild(todoItem);
        })
    }

})