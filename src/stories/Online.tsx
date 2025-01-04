import { useEffect, useState } from "react";

export const Online = () => {
  const [log, setLog] = useState<string[]>([]);
  const [state, setState] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => {
      setLog((prev) => [...prev, "Changed to Online"]);
      setState(navigator.onLine);
    };
    const handleOffline = () => {
      setLog((prev) => [...prev, "Changed to Offline"]);
      setState(navigator.onLine);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  }, []);

  return (
    <div>
      <p>State: {state.toString()}</p>

      <textarea
        value={log.join("\n")}
        readOnly
        style={{ width: "100%", height: "200px" }}
      ></textarea>
    </div>
  );
};
