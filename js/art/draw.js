import { ctx } from "../canvasConfig.js";
import { randInt } from "../mathFunc.js";

function drawLine(p1, p2) {
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.fill();
  ctx.stroke();
}

function drawTriangle(p1, p2, p3) {
  ctx.fillStyle = `hsl(${randInt(0, 360)}, 80%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

export { drawLine, drawTriangle };
