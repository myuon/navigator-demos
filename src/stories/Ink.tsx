import { useEffect } from "react";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Ink: React.FC = () => {
  useEffect(() => {
    if (!navigator.ink) {
      throw new Error("Ink not supported");
    }

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const presenter = navigator.ink.requestPresenter({
      presentationArea: canvas,
    });
    let move_cnt = 0;
    let style = { color: "rgb(0 255 0 / 100%)", diameter: 10 };

    let prev = { x: 0, y: 0 };

    canvas.addEventListener("pointermove", async (evt) => {
      const pointSize = 10;
      ctx.fillStyle = style.color;
      ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);

      if (!(prev.x == 0 && prev.y == 0)) {
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(evt.pageX, evt.pageY);
        ctx.strokeStyle = style.color;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      if (move_cnt == 20) {
        const r = getRandomInt(0, 255);
        const g = getRandomInt(0, 255);
        const b = getRandomInt(0, 255);

        style = { color: `rgb(${r} ${g} ${b} / 100%)`, diameter: 10 };
        move_cnt = 0;
        document.getElementById(
          "div"
        )!.style.backgroundColor = `rgb(${r} ${g} ${b} / 60%)`;
      }
      move_cnt += 1;
      (await presenter).updateInkTrailStartPoint(evt, style);

      prev = { x: evt.pageX, y: evt.pageY };
    });

    window.addEventListener("pointerdown", () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    });

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  return (
    <div>
      <canvas
        id="canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden",
        }}
      ></canvas>
      <div
        id="div"
        style={{
          backgroundColor: "rgb(0 255 0 / 100%)",
          position: "fixed",
          top: "1rem",
          left: "1rem",
        }}
      >
        Delegated ink trail should match the color of this div.
      </div>
    </div>
  );
};
