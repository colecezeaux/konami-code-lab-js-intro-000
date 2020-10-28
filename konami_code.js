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
  document.body.addEventListener("keydown", init(event) => {
    let key = e.keydown;

    for(let i = 0, l = codes.length; i < l; i++) {
      if(key === codes[index]) {
        index++;

    if(index === codes.length) {
      alert("Hurray!");
}
  } else {
    index = 0;
  } }
})
}
