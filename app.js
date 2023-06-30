const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 800;
canvas.width = 800;
// // rect는 보이진 않지만 좌표를 지정하고 지정한 크기만큰 사각형을 만드는 함수이다
// ctx.rect(50, 50, 100, 100);
// // fill은 지정한 사각형에 색깔을 채운다
// ctx.fill();

// ctx.beginPath();
// // 위랑 분리해서 사용할수 있다
// ctx.rect(150, 150, 100, 100);
// // 사각형에 테두리만 생기게 한다
// ctx.stroke();

// ctx.beginPath();
// ctx.rect(250, 250, 100, 100);
// // 사각형에 채울 색깔을 지정한다
// ctx.fillStyle = "blue";
// ctx.fill();

// ctx.beginPath();
// ctx.rect(350, 350, 100, 100);
// // 사각형에 태두리 색깔을 지정한다
// ctx.strokeStyle = "red";
// ctx.stroke();

// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(600, 300, 30, 0, 2 * Math.PI);
// ctx.fill();
const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
];

// function onClick(event) {
//   console.log(event);
//   ctx.beginPath();
//   ctx.moveTo(0, 0);
//   ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
//   ctx.lineWidth = 2;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }
// canvas.addEventListener("mousemove", onClick);
let isPainting = false;
ctx.lineWidth = 2;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
  // ctx.lineTo(event.offsetX, event.offsetY);
  isPainting = true;
}

function onMouseUp() {
  // ctx.lineTo(event.offsetX, event.offsetY);
  isPainting = false;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
