const handleClick = function () {
  if (document.querySelector("#newTask input").value.length === 0) {
    alert("Non puoi aggiungere una casella vuota all'elenco!");
  } else {
    addTask();
    attachComplete();
    attachDelete();
  }
};

const addTask = function () {
  let tasks = document.querySelector("#tasks");
  let inputField = document.querySelector("#newTask input");
  let newTask = `
      <div class="task">
          <span id="taskname">
              ${inputField.value}
          </span>
          <button class="delete"> X
              <i class="far fa-trash-alt"></i>
          </button>
      </div>
  `;
  tasks.innerHTML += newTask;
  inputField.value = "";
};

const attachComplete = function () {
  let allTasks = document.querySelectorAll(".task");
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].addEventListener("click", function () {
      this.classList.toggle("completed");
    });
  }
};

const attachDelete = function () {
  let allDeleteButtons = document.querySelectorAll(".delete");
  for (let i = 0; i < allDeleteButtons.length; i++) {
    allDeleteButtons[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
};

window.onload = function () {
  let addButton = document.querySelector("#addButton");
  addButton.addEventListener("click", handleClick);
};
