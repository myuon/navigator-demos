import { useEffect, useState } from "react";

export const SendBeacon = () => {
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    window.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden" && url) {
        navigator.sendBeacon(url, "Session is about to end.");
      }
    });
  }, [url]);

  return (
    <div>
      <label>
        URL to send beacon to:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.currentTarget.value)}
          style={{ width: "100%" }}
        ></input>
      </label>

      <button
        onClick={() => {
          navigator.sendBeacon(url, "Hello, world!");
        }}
      >
        Send
      </button>

      <p>
        You may find the testing url at{" "}
        <a href="https://webhook.site/">https://webhook.site/</a>
      </p>
    </div>
  );
};
