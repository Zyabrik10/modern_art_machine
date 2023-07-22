import { initPoint, point1, point2 } from "./points.js";

function setPoint1(x, y) {
  point1.x = x;
  point1.y = y;
}

function setPoint2(x, y) {
  point2.x = x;
  point2.y = y;
}

function setInitPoint(x, y) {
  initPoint.x = x;
  initPoint.y = y;
}

export { setInitPoint, setPoint1, setPoint2 };
