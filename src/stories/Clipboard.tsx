import { useState } from "react";

export const Clipboard: React.FC = () => {
  const [value, setValue] = useState("Hello, World!");

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
      <textarea
        rows={5}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      ></textarea>
      <button
        onClick={() => {
          navigator.clipboard.writeText("Hello, world!");
        }}
      >
        Copy
      </button>
      <button
        onClick={() => {
          navigator.clipboard.readText().then((text) => {
            setValue(text);
          });
        }}
      >
        Paste
      </button>
    </div>
  );
};
