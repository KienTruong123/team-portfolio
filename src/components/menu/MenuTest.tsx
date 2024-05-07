import React, { useEffect, useRef, useState } from "react";

function drawTextAlongArc(
  context: CanvasRenderingContext2D,
  str: string,
  centerX: number,
  centerY: number,
  radius: number,
  angle: number
) {
  const len = str.length;
  context.save();
  context.translate(centerX, centerY);
  context.rotate(-angle / 2);
  context.rotate(-(angle / len) / 2);
  context.fillStyle = "red";
  for (let n = 0; n < len; n++) {
    context.rotate(angle / len);
    context.save();
    context.translate(0, -radius);
    const s = str[n];
    context.fillText(s, 0, 0);
    context.restore();
  }
  context.restore();
}
const PI = Math.PI;
const update = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  size: number,
  event?: React.MouseEvent<HTMLCanvasElement, MouseEvent>
) => {
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");
  if (!canvas || !ctx) return;
  const rect = canvas.getBoundingClientRect();
  const mouseX = event ? event.clientX - rect.left : 0;
  const mouseY = event ? event.clientY - rect.top : 0;
  const radius = size / 2;

  ctx.clearRect(0, 0, size, size);
  const mouseAngle = (-Math.atan2(mouseX - radius, mouseY - radius) + PI * 2.5) % (PI * 2);
  const mouseRadius = Math.sqrt(Math.pow(mouseX - radius, 2) + Math.pow(mouseY - radius, 2));
  const innerRadius = size * 0.3;
  ctx.fillStyle = 'green';
  ctx.shadowColor = '#898';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  for (let i = 7; i < 8; i++) {
    // const angle = -PI / 8 + i * (PI / 4);
    const startAngle = i * (PI / 4);
    const endAngle = startAngle + PI / 4;
    if (mouseAngle > startAngle && mouseAngle < endAngle && mouseRadius <= radius && mouseRadius >= innerRadius) {
      ctx.fillStyle = "#000";
    } else {
      ctx.fillStyle = "#ccc";
    }

    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius, startAngle, endAngle);
    ctx.lineTo(radius, radius);
    ctx.fill();
    drawTextAlongArc(ctx, "Arc Canvas Text", radius, radius, radius * 0.8, PI / 4);
  }

  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(radius, radius, innerRadius, 0, 2 * PI);
  ctx.fill();
};

const Menu: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const size = 250;

  useEffect(() => {
    update(canvasRef, size);
  }, []);

  return <canvas ref={canvasRef} width={size} height={size} onMouseMove={(e) => update(canvasRef, size, e)}></canvas>;
};

export default Menu;
