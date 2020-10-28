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
var n = []
for(let i = 0; i < codes.length; i++) {
  n.push(e.input[i])
}
  if(n === codes) {
    alert("Hurray!")
  } 
  })
}
