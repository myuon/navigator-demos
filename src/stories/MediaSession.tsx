import { useEffect, useState } from "react";

const generateRandomVideo = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 360;
  const ctx = canvas.getContext("2d")!;

  const video = document.getElementById("randomVideo")! as HTMLVideoElement;

  // Canvas を MediaStream に変換
  const stream = canvas.captureStream(3); // フレームレートを30fpsに設定
  video.srcObject = stream;

  function drawRandomFrames() {
    // 背景をランダムな色に設定
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ランダムな円を描画
    for (let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 50,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.7)`;
      ctx.fill();
    }

    // ランダムなテキストを描画
    ctx.font = `${Math.random() * 30 + 10}px Arial`;
    ctx.fillStyle = "white";
    ctx.fillText(
      `Random: ${Math.random().toFixed(2)}`,
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );

    requestAnimationFrame(drawRandomFrames);

    navigator.mediaSession.setPositionState({
      duration: 1000,
      playbackRate: 1,
      position: Math.random() * 1000,
    });
  }

  drawRandomFrames();
};

export const MediaSession: React.FC = () => {
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: "Unforgettable",
        artist: "Nat King Cole",
        album: "The Ultimate Collection (Remastered)",
        artwork: [
          {
            src: "https://dummyimage.com/96x96",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "https://dummyimage.com/128x128",
            sizes: "128x128",
            type: "image/png",
          },
        ],
      });

      navigator.mediaSession.setActionHandler("play", () => {
        setLog((prev) => [...prev, "Play"]);
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        setLog((prev) => [...prev, "Pause"]);
      });
      navigator.mediaSession.setActionHandler("stop", () => {
        setLog((prev) => [...prev, "Stop"]);
      });
      navigator.mediaSession.setActionHandler("seekbackward", () => {
        setLog((prev) => [...prev, "Seek Backward"]);
      });
      navigator.mediaSession.setActionHandler("seekforward", () => {
        setLog((prev) => [...prev, "Seek Forward"]);
      });
      navigator.mediaSession.setActionHandler("seekto", () => {
        setLog((prev) => [...prev, "Seek To"]);
      });
      navigator.mediaSession.setActionHandler("previoustrack", () => {
        setLog((prev) => [...prev, "Previous Track"]);
      });
      navigator.mediaSession.setActionHandler("nexttrack", () => {
        setLog((prev) => [...prev, "Next Track"]);
      });
      navigator.mediaSession.setActionHandler("skipad", () => {
        setLog((prev) => [...prev, "Skip Ad"]);
      });
      navigator.mediaSession.setActionHandler(
        "togglecamera" as MediaSessionAction,
        () => {
          setLog((prev) => [...prev, "Toggle Camera"]);
        }
      );
      navigator.mediaSession.setActionHandler(
        "togglemicrophone" as MediaSessionAction,
        () => {
          setLog((prev) => [...prev, "Toggle Microphone"]);
        }
      );
      navigator.mediaSession.setActionHandler(
        "hangup" as MediaSessionAction,
        () => {
          setLog((prev) => [...prev, "Hang Up"]);
        }
      );
    }

    generateRandomVideo();
  }, []);

  return (
    <div>
      <p>Use Picture-in-Picture to test the mediaSession</p>
      <video
        id="randomVideo"
        loop
        muted
        controls
        width="360px"
        onPlay={() => {
          navigator.mediaSession.playbackState = "playing";

          setLog((prev) => [...prev, "Play"]);
        }}
      ></video>
      <textarea
        value={log.join("\n")}
        readOnly
        style={{ width: "100%", height: "200px" }}
      ></textarea>
    </div>
  );
};
