import { useState } from "react";

export const Keyboard = () => {
  const [layoutMap, setLayoutMap] = useState<[string, string][]>();

  return (
    <div>
      <button
        onClick={() => {
          navigator.keyboard?.getLayoutMap().then((layoutMap) => {
            setLayoutMap(
              Array.from(layoutMap.entries()).sort((a, b) => (a > b ? 1 : -1))
            );
          });
        }}
      >
        GetLayoutMap
      </button>

      <p>
        {layoutMap?.map(([key, value]) => (
          <li key={value}>
            {key}: {value}
          </li>
        ))}
      </p>
    </div>
  );
};
