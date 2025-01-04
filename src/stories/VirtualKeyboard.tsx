import { useEffect, useState } from "react";

export const VirtualKeyboard = () => {
  const [log, setLog] = useState<string[]>([]);
  useEffect(() => {
    navigator.virtualKeyboard!.overlaysContent = true;

    navigator.virtualKeyboard!.addEventListener("geometrychange", (event) => {
      console.log("geometrychange", event);
      const rect = event.target.boundingRect;
      setLog((prev) => [
        ...prev,
        `[geometrychange] x: ${rect.x}, y: ${rect.y}, width: ${rect.width}, height: ${rect.height}`,
      ]);
    });
  }, []);

  return (
    <div>
      <p>This example only works on the top level browsing context.</p>
      <div
        contentEditable
        virtualkeyboardpolicy="manual"
        inputMode="text"
        onDoubleClick={() => {
          navigator.virtualKeyboard!.show();
        }}
        dangerouslySetInnerHTML={{
          __html: `(Doubleclick here to show the virtual keyboard) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.`,
        }}
      ></div>

      <textarea
        value={log.join("\n")}
        readOnly
        style={{ width: "100%", height: "200px" }}
      />
    </div>
  );
};
