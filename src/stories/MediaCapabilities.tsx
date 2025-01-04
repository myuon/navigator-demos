import { useState } from "react";

export const MediaDecodingCapabilities = (args: MediaDecodingConfiguration) => {
  const [result, setResult] = useState<MediaCapabilitiesDecodingInfo>();

  return (
    <div>
      <button
        onClick={() => {
          if ("mediaCapabilities" in navigator) {
            navigator.mediaCapabilities.decodingInfo(args).then((result) => {
              console.log(result);
              setResult(result);
            });
          }
        }}
      >
        Load
      </button>
      <p>Decoding Info</p>
      <ul>
        <li>supported: {result?.supported.toString()}</li>
        <li>smooth: {result?.smooth.toString()}</li>
        <li>powerEfficient: {result?.powerEfficient.toString()}</li>
      </ul>
    </div>
  );
};

export const MediaEncodingCapabilities = (args: MediaEncodingConfiguration) => {
  const [result, setResult] = useState<MediaCapabilitiesEncodingInfo>();

  return (
    <div>
      <button
        onClick={() => {
          if ("mediaCapabilities" in navigator) {
            navigator.mediaCapabilities.encodingInfo(args).then((result) => {
              console.log(result);
              setResult(result);
            });
          }
        }}
      >
        Load
      </button>
      <p>Encoding Info</p>
      <ul>
        <li>supported: {result?.supported.toString()}</li>
        <li>smooth: {result?.smooth.toString()}</li>
        <li>powerEfficient: {result?.powerEfficient.toString()}</li>
      </ul>
    </div>
  );
};
