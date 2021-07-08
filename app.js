// Declaring all inputs
let all = document.getElementById("all");
let topLeft = document.getElementById("top-left");
let topRight = document.getElementById("top-right");
let bottomLeft = document.getElementById("bottom-left");
let bottomRight = document.getElementById("bottom-right");
let arr = [topLeft, topRight, bottomLeft, bottomRight]

// Declaring DOM elements
const div = document.getElementById("div");
const btn = document.getElementById("copybtn");
const text = document.querySelector('textarea');
text.value = '5% 5% 5% 5%';

// Adding eventListners
all.addEventListener("input", updateAll);
all.addEventListener("input", updateCode);

arr.forEach((el) => {
    el.addEventListener('input',update);
    el.addEventListener('input',updateCode);
});

btn.addEventListener("click",copy)

// Explaining functions used in script
function updateAll() {
  allValue = document.getElementById("all").value;
  topLeft.value = allValue;
  topRight.value = allValue;
  bottomLeft.value = allValue;
  bottomRight.value = allValue;

  div.style.borderRadius = allValue + "%";
}

function update() {
    div.style.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomLeft.value}% ${bottomRight.value}%`;
}

function updateCode() {
    text.value = `${topLeft.value}% ${topRight.value}% ${bottomLeft.value}% ${bottomRight.value}%`;
}

function copy() {
    text.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}