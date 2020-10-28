const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {

  // Attaching an keydown event listener to document.body
  document.body.addEventListener("keydown", (event) => {
    // Now, how can we check for which specific key was pressed?
for(let i = 0; i < codes.length; i++) {
  if(codes[i] !== input[i]) {
    break
  } else if(codes.length === input[i]) {
    alert("Hurray!")
  }
}
  })
}
