import React, { useEffect, useRef, useState } from "react";

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

  for (let i = 0; i < 8; i++) {
    const angle = -PI / 8 + i * (PI / 4);

    if (mouseAngle > angle && mouseAngle < angle + PI / 4 && mouseRadius <= radius && mouseRadius >= 69) {
      ctx.fillStyle = "#000";
    } else {
      ctx.fillStyle = "#ccc";
    }

    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius, angle, angle + PI / 4, false);
    ctx.lineTo(radius, radius);
    ctx.fill();
  }

  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(radius, radius, 69, 0, 2 * PI, false);
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
