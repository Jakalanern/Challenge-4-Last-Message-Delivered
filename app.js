// VARIABLES
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let btn = document.querySelector(".main_btn");
let delivered = document.querySelector(".delivered");
let entries = [];

// MAIN
form.addEventListener("submit", function (e) {
  e.preventDefault();
  storeEntry();
  clearInput();
  showLastMessage();
});

// FUNCTIONS
function storeEntry() {
  entries.push(input.value);
  console.log(entries);
}
function clearInput() {
  input.value = "";
}
function showLastMessage() {
  delivered.style.opacity = "1";
  delivered.style.zIndex = "1";
  delivered.innerHTML = entries[entries.length - 1];
}
