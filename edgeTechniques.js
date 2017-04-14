function drawPointyArc (d) {
  let dx = d.source.x - d.target.x;
  let dy = d.source.y - d.target.y;
  let arcRadius = window.NODE_SIZE * dx / Math.abs(dx);
  let theta;
  let edgePoint;
  let front;
  let back;
  let arc;

  if (dx === 0) {
    if (dy >= 0) {
      theta = Math.PI;
    } else {
      theta = -Math.PI;
    }
    edgePoint = {
      x: 0,
      y: window.NODE_SIZE / 2
    };
  } else {
    theta = Math.atan((d.source.y - d.target.y) / (d.source.x - d.target.x)) + Math.PI / 2;
    edgePoint = {
      x: window.NODE_SIZE / 2 * Math.cos(theta),
      y: window.NODE_SIZE / 2 * Math.sin(theta)
    };
  }
  front = {
    x: d.target.x + edgePoint.x,
    y: d.target.y + edgePoint.y
  };
  back = {
    x: d.target.x - edgePoint.x,
    y: d.target.y - edgePoint.y
  };
  arc = {
    x: (d.target.x + d.source.x) / 2 + arcRadius * Math.cos(theta),
    y: (d.target.y + d.source.y) / 2 + arcRadius * Math.sin(theta)
  };
  return 'M' +
    front.x + ',' +
    front.y + 'Q' +
    arc.x + ',' +
    arc.y + ',' +
    d.source.x + ',' +
    d.source.y + 'Q' +
    arc.x + ',' +
    arc.y + ',' +
    back.x + ',' +
    back.y + 'Z';
}

export default {
  drawPointyArc
};
