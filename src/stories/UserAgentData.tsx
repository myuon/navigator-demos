/// <reference types="user-agent-data-types" />

import { useEffect, useState } from "react";

export const UserAgentData = ({ hints }: { hints: string[] }) => {
  const [highEntropyValues, setHighEntropyValues] = useState<UADataValues>();

  useEffect(() => {
    navigator.userAgentData?.getHighEntropyValues(hints).then((values) => {
      console.log(values);
      setHighEntropyValues(values);
    });
  }, [hints]);

  return (
    <div>
      <div>
        <p>brands</p>

        <ul>
          {navigator.userAgentData?.brands.map((brand, index) => (
            <li key={index}>
              brand: {brand.brand} (version: {brand.version})
            </li>
          ))}
        </ul>

        <p>mobile: {navigator.userAgentData?.mobile.toString()}</p>
        <p>platform: {navigator.userAgentData?.platform}</p>
      </div>
      <div>
        <p>HighEntropyValues</p>

        <ul>
          <li>architecture: {highEntropyValues?.architecture}</li>
          <li>bitness: {highEntropyValues?.bitness}</li>
          <li>formFactor: {highEntropyValues?.formFactor?.join(",")}</li>
          <li>
            fullVersionList:{" "}
            {highEntropyValues?.fullVersionList
              ?.map((v) => `${v.brand} (${v.version})`)
              .join(" / ")}
          </li>
          <li>model: {highEntropyValues?.model}</li>
          <li>platformVersion: {highEntropyValues?.platformVersion}</li>
          <li>wow64: {highEntropyValues?.wow64?.toString()}</li>
        </ul>
      </div>
    </div>
  );
};
