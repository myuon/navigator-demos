import { useEffect, useState } from "react";

export const Locks = () => {
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    navigator.locks.request("my-lock", async (lock) => {
      setLog((prev) => [...prev, `Lock acquired ${lock?.name}`]);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLog((prev) => [...prev, `Lock released ${lock?.name}`]);
    });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          navigator.locks.query().then((result) => {
            setLog((prev) => [
              ...prev,
              `[Query] Held Locks: ${result.held
                ?.map((l) => l.name)
                .join(", ")} / Pending Locks: ${result.pending
                ?.map((l) => l.name)
                .join(", ")}`,
            ]);
          });
        }}
      >
        Query
      </button>
      <textarea
        value={log.join("\n")}
        readOnly
        style={{ width: "100%", height: "200px" }}
      ></textarea>
    </div>
  );
};
