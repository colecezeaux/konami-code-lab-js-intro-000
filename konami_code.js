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
    let key = e.keydown;

    for(let i = 0, l = codes.length; i < l; i++) {
      if(key === codes[index]) {
        continue;

    if(index === l) {
      alert("Hurray!");
}
  } else {
    index = 0;
  } }
})
}
