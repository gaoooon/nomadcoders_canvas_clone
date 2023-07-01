const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const colors = document.querySelector("#color");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const saveBtn = document.getElementById("save");

canvas.height = 800;
canvas.width = 800;
ctx.lineCap = "round";
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

// const colors = [
//   "#ff3838",
//   "#ffb8b8",
//   "#c56cf0",
//   "#ff9f1a",
//   "#fff200",
//   "#32ff7e",
//   "#7efff5",
// ];

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorsChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  const changeValue = event.target.dataset.color;
  ctx.strokeStyle = changeValue;
  ctx.fillStyle = changeValue;
  colors.value = changeValue;
}

function onModeClick() {
  if(isFilling) {
    isFilling = false;
    modeBtn.innerText = "Draw";
  } else { 
    isFilling = true;
    modeBtn.innerText = "Fill";
  }
}

function onClickCanvas() {
  if(isFilling) {
    ctx.fillRect(0, 0, 800, 800);
  }
}

function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 800);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
}

function onFileChange(event) {
const file = event.target.files[0];
const url = URL.createObjectURL(file);
const image = new Image();
image.src = url;
image.onload = function() {
    ctx.drawImage(image, 0, 0, 800, 800);
    fileInput.value = null;
  }
}
function onDoubleClick(event) {
  const text = textInput.value;
  if(text !== "") {
  ctx.save();
  ctx.lineWidth = 1;
  ctx.font = "48px sans"
  ctx.fillText(text, event.offsetX, event.offsetY);
  ctx.restore();
  }
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onClickCanvas);

lineWidth.addEventListener("change", onLineWidthChange);
colors.addEventListener("change", onColorsChange);

colorOption.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click",onModeClick);
destroyBtn.addEventListener("click",onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
canvas.addEventListener("dblclick", onDoubleClick);
saveBtn.addEventListener("click", onSaveClick);