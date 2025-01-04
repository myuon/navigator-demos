import { useState } from "react";

export const WakeLock = () => {
  const [log, setLog] = useState<string[]>([]);
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);

  return (
    <div>
      <button
        onClick={() => {
          navigator.wakeLock.request("screen").then((wakeLock) => {
            console.log(wakeLock);
            setLog((log) => [
              ...log,
              `WakeLock acquired: ${wakeLock.type} ${wakeLock.released}`,
            ]);
            wakeLock.addEventListener("release", () => {
              setLog((log) => [...log, "WakeLock released"]);
              setWakeLock(null);
            });

            setWakeLock(wakeLock);
          });
        }}
      >
        Lock
      </button>
      <button
        onClick={() => {
          wakeLock?.release().then(() => {
            setLog((log) => [...log, "Release button clicked"]);
            setWakeLock(null);
          });
        }}
      >
        Release
      </button>

      <textarea
        value={log.join("\n")}
        readOnly
        style={{ width: "100%", height: "200px" }}
      />
    </div>
  );
};
