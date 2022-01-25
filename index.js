const display = document.querySelector(".display");
const addBtn = document.querySelector(".add-btn");

let count = 0;

addBtn.addEventListener("click", () => {
  count++;
  display.innerHTML = count;
});
