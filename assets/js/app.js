const checkbox = document.getElementById("checkbox");
const navBar = document.querySelector(".navbar-inner");
const mainHero = document.querySelector(".main-hero-section");
const mainHeroHeading = document.querySelector(".hero-heading");
const themeButton = document.querySelector(".button");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  navBar.classList.toggle("dark-mode-navbar");
  mainHero.classList.toggle("dark-mode-hero");
  mainHeroHeading.classList.toggle("hero-heading-dark");
  themeButton.classList.toggle("dark-mode-theme-button");
});



// Todo App


const taskInput = document.getElementById("taskInput");
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
            <button class="complete-btn">✓</button>
            <button class="delete-btn">🗑</button>
        </div>
    `;


    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");
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