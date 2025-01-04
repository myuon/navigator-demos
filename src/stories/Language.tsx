import { useEffect, useState } from "react";

export const Language: React.FC = () => {
  const [log, setLog] = useState<string[]>([]);
  useEffect(() => {
    window.addEventListener("languagechange", () => {
      setLog((prev) => [
        ...prev,
        `${new Date()} Language changed to ${navigator.language}`,
      ]);
    });
  }, []);

  return (
    <div>
      <p>Language: {navigator.language}</p>

      <p>Languages: {navigator.languages.join(", ")}</p>

      <textarea
        value={log.join("\n")}
        readOnly
        style={{ width: "100%", height: "200px" }}
      ></textarea>
    </div>
  );
};
