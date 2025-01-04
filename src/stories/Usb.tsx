import { useEffect, useState } from "react";

export const Usb = () => {
  const [devices, setDevices] = useState<USBDevice[]>([]);

  useEffect(() => {
    navigator.usb.getDevices().then((devices) => {
      console.log(devices);
      setDevices(devices);
    });
  }, []);

  return (
    <div>
      <p>USB Devices: {devices.length}</p>

      {devices.map((device, index) => (
        <div key={index}>
          <div>productName: {device.productName}</div>
          <div>manufacturerName: {device.manufacturerName}</div>
        </div>
      ))}
    </div>
  );
};
