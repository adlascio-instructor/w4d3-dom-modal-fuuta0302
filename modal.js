console.log("here");

// select button element

// add event listener on click to button
// remove class invisible from div modal

// add event listener on key press Escape
// add class invisible to div modal


const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Hello World!");
});

let class1 = document.querySelector("modal-wrapper invisible fixed bg-gray-500 w-screen h-screen flex items-center justify-center")
class1.classList.remove("modal-wrapper invisible fixed bg-gray-500 w-screen h-screen flex items-center justify-center")

const input = document.querySelector("input");
input.addEventListener("keypress", (event) => {
  console.log(event.key);
});

let class2 = document.querySelector("modal-wrapper invisible fixed bg-gray-500 w-screen h-screen flex items-center justify-center")
class2.classList.add("modal-wrapper invisible fixed bg-gray-500 w-screen h-screen flex items-center justify-center")

