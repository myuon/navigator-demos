import { useEffect, useState } from "react";

export const MediaDevices: React.FC = () => {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  useEffect(() => {
    const constraints = {
      audio: true,
      video: { width: 300, height: 200 },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const video = document.querySelector("video")!;
        video.srcObject = mediaStream;

        const audio = document.querySelector("audio")!;
        audio.srcObject = mediaStream;
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          navigator.mediaDevices.enumerateDevices().then((devices) => {
            console.log(devices);
            setDevices(devices);
          });
        }}
      >
        EnumerateDevices
      </button>
      <p>MediaDevices: {devices.length}</p>
      {devices.map((device) => (
        <ul key={`${device.deviceId}-${device.kind}`}>
          <li>DeviceId: {device.deviceId}</li>
          <li>Kind: {device.kind}</li>
          <li>Label: {device.label}</li>
        </ul>
      ))}

      <video controls></video>
      <audio controls></audio>
    </div>
  );
};
