/// <reference types="network-information-types" />

import { useState } from "react";

export const Connection: React.FC = () => {
  const [data, setData] = useState<NetworkInformation>();

  return (
    <div>
      <button
        onClick={() => {
          console.log(navigator.connection);
          setData(navigator.connection);
        }}
      >
        Get Connection
      </button>

      <ul>
        <li>downlink: {data?.downlink}</li>
        <li>downlinkMax: {data?.downlinkMax}</li>
        <li>effectiveType: {data?.effectiveType}</li>
        <li>rtt: {data?.rtt}</li>
        <li>saveData: {data?.saveData}</li>
        <li>type: {data?.type}</li>
      </ul>
    </div>
  );
};
