const form = document.querySelector(".add-new-todo-form");
const todosContainer = document.querySelector(".todos-container");

let todos = "";
let currentId = 0;

const handleAddNewTodo = (e) => {
    e.preventDefault();

const data = new FormData(e.target);

// ---------- Generate ToDo -------------
    // creere de nou element
    const newTodo = document.createElement("div");
    newTodo.innerHTML = `
        <button>
            <img src="" />
        </button>
        <p>${data.get("new-todo")}</p>
        <button class="delete-button">
            <img src="./assets/icon-cross.svg" />
        </button>
    `;

    todosContainer.appendChild(newTodo);

    const deletButton = newTodo.querySelector(".delete-button");

    // function scoped - este creata 
    const handleDeleteToDo = () => {
        todosContainer.removeChild(newTodo);
    };

    deletButton.addEventListener("click", handleDeleteToDo);

    // ---------- Push ToDo -------------
    currentId++;
    todos.push({ //{} le ia ca pe un obiect
        id: currentId,
        text: data.get("new-todo"),
    });
};

form.addEventListener("click", handleAddNewTodo);