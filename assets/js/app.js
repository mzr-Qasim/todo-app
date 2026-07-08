// Dark-Light Mode

const checkbox = document.getElementById("checkbox");
const navBar = document.querySelector(".navbar-inner");
const mainHero = document.querySelector(".main-hero-section");
const mainHeroHeading = document.querySelector(".hero-heading");
const sectionHeading = document.querySelector(".section-heading");
const taskInput = document.getElementById("taskInput");

let tasks = [];

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  navBar.classList.toggle("dark-mode-navbar");
  mainHero.classList.toggle("dark-mode-hero");
  mainHeroHeading.classList.toggle("hero-heading-dark");
  sectionHeading.classList.toggle("section-heading-dark");
  taskInput.classList.toggle("dark-mode-input-box");
});



// Todo App

const createButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

createButton.addEventListener("click", function () {
  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
        <p class="task-text">${taskInput.value}</p>

        <div class="task-actions">
            <button class="complete-btn task-btns"><i class="icon-task-completed"></i></button>
            <button type="button" class="delete-btn task-btns" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="icon-delete-task"></i></button>
            
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Confirmation</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you sure to delete the task ?
      </div>
      <div class="modal-footer">
              <button type="button" class="btn btn-secondary ">No</button>
        <button type="button" class="btn btn-danger delete-final" data-bs-dismiss="modal">Yes</button>
      </div>
    </div>
  </div>
</div>

        </div>
    `;

  const task = {
    task: taskInput.value,
  };

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  const completeBtn = li.querySelector(".complete-btn");
  const deleteBtn = li.querySelector(".delete-final");
  const taskText = li.querySelector(".task-text");

  completeBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  taskList.appendChild(li);

  taskInput.value = "";

  taskInput.focus();
});
