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

var index = 0;

function init() {
  document.body.addEventListener("keydown", (event) => {
    for(let i = 0, l = codes.length; i < l; i++) {
      if(codes[i] === event[i]) {
        continue

    if(codes[i] === l) {
      alert("Hurray!");
    }
  } else {
    index = 0
  ;
  } }
})
}
