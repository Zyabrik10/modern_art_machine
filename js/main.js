import { initPoint, point1, point2 } from "./art/points.js";
import { setInitPoint, setPoint1, setPoint2 } from "./art/setPoints.js";
import { drawLine, drawTriangle } from "./art/draw.js";
import { canvas } from "./canvasConfig.js";

let click = 0;

function clickHandler({ offsetX: x, offsetY: y }) {
  if (click <= 4) click++;

  if (click === 1) {
    setInitPoint(x, y);
  } else if (click === 2) {
    setPoint1(x, y);
    drawLine(initPoint, { x, y });
  } else if (click === 3) {
    setPoint2(x, y);
    drawTriangle(initPoint, point1, point2);
  } else if (click === 4) {
    setInitPoint(x, y);
    drawTriangle(initPoint, point1, point2);
  } else {
    setPoint1(point2.x, point2.y);
    setPoint2(initPoint.x, initPoint.y);
    setInitPoint(x, y);
    drawTriangle(initPoint, point1, point2);
  }
}

canvas.addEventListener("click", clickHandler);
