const form = document.querySelector(".add-new-todo-form");
const todosContainer = document.querySelector(".todos-container");
const numberOfItemsLeft = document.querySelector(".number-of-items-left");

let todos = [];
let currentId = 0;

const handleAddNewTodo = (e) => {
    e.preventDefault();//impiedica refresh

    const data = new FormData(e.target); //luam datele din formular

    //  ------ Todo's list ----------   evidenta de todo si cu id
    currentId++;
    todos.push({
        id: currentId,
        text: data.get("new-todo"),
        isCompleted: false
    });

    //  ------ Generate Todo ----------
    //cream copiii pe care ii introducem in div
    const newTodo = document.createElement("div");
    newTodo.setAttribute("data-id", currentId); //preia id-ul introdus de utilizator 
    newTodo.classList.add("todo-container");
    
    //vrem sa modificam el de html; la img am pus iconita in buton pt ca vrem sa fie apasata
    newTodo.innerHTML = `   
        <button class="mark-todo-as-completed"> 
        <img src="./assets/icon-check.svg" /> 
         </button>
        <p>${data.get("new-todo")}</p>
        <button class="delete-button">
        <img src="./assets/icon-cross.svg" />
        </button>
        `;
    todosContainer.appendChild(newTodo);

    // Marked as completed
    const markButoon = newTodo.querySelector(".mark-todo-as-completed");
    const handleMarkTodo = (e) => {
    const id = Number(newTodo.getAttribute("data-id"));//in functia de marcare avem acces la id
    const indexOfCurrentTodo = todos.findIndex((todo) => todo.id === id);

        if (newTodo.classList.contains("completed")) {
        todos[indexOfCurrentTodo].isCompleted = false;
    } else {
        todos[indexOfCurrentTodo].isCompleted = true;
    }
    newTodo.classList.toggle("completed");

    updateOfNumberItemsLeft ();
};

markButoon.addEventListener("click", handleMarkTodo);
   
// Delete butoon
    const deleteButton = newTodo.querySelector(".delete-button");

    // function scope
    const handleDeleteToDo = () => {
        const id = Number(newTodo.getAttribute("data-id"));//in functia de marcare avem acces la id
        const indexOfCurrentTodo = todos.findIndex((todo) => todo.id === id);

        todos.splice(indexOfCurrentTodo, 1); //sterge din todos un obiect

        todosContainer.removeChild(newTodo); //eliminare copii pe butonul-iconita 

        updateOfNumberItemsLeft ();
    };

    deleteButton.addEventListener("click", handleDeleteToDo);

    console.log(todos);

    // Update number of items
    updateOfNumberItemsLeft ();
};

form.addEventListener("submit", handleAddNewTodo);


const updateOfNumberItemsLeft = () => {
const uncompletedItems = todos.filter((todo) => todo.isCompleted === false);
numberOfItemsLeft.innerText = uncompletedItems.length;
};

// -------- Filters -----------
const filterButtons = document.querySelectorAll(".filter-button");

const hideAllTodos = () => {
    const allTodos = document.querySelectorAll(".todo-container");

    allTodos.forEach((todo) => {
        todo.classList.add("hide");
    })
};

//selector de css care cauta toate el cu clasa todo-container 
//dar care nu au clasa note(.completed)
const showActiveTodos = () => {
    const activeTodos = document.querySelectorAll(".todo-container:not(.completed)"); 
        activeTodos.forEach((todo) => {
        todo.classList.remove("hide");
    });
};

const showAllTodos = () => {
    const allTodos = document.querySelectorAll(".todo-container");
    allTodos.forEach((todo) => {
        todo.classList.remove("hide");
    });
};

const showCompletedTodos = () => {
    const completedTodos = document.querySelectorAll(".todo-container");
    completedTodos.forEach((todo) => {
        todo.classList.remove("hide");
    })
};

const handleChangeFilter = (e) => { //e - ne arata cine a declansat funtia
    const selectedFilter = document.querySelector(".selected-filter");
    selectedFilter.classList.remove("selected-filter");

    e.target.classList.add("selected-filter");

    if(e.target.value === "active") {
        hideAllTodos();
        showActiveTodos();
    } else if (e.target.value === "active"){
        showAllTodos();

    }
};

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("click", handleChangeFilter);
});

