import { useEffect, useState } from "react";

export const Bluetooth: React.FC = () => {
  const [availability, setAvailability] = useState<boolean>();
  const [device, setDevice] = useState<BluetoothDevice>();
  useEffect(() => {
    navigator.bluetooth.getAvailability().then((a) => {
      console.log(a);
      setAvailability(a);
    });
  }, []);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigator.bluetooth.getAvailability().then((a) => {
              console.log(a);
              setAvailability(a);
            });
          }}
        >
          Check availability
        </button>

        <p>{availability?.toString() ?? "-"}</p>
      </div>
      <div>
        <button
          onClick={() => {
            navigator.bluetooth
              .requestDevice({
                acceptAllDevices: true,
              })
              .then((device) => {
                console.log(device);
                setDevice(device);
              });
          }}
        >
          Request device
        </button>

        <ul>
          <li>Id: {device?.id}</li>
          <li>Name: {device?.name}</li>
          <li>Connected: {device?.gatt?.connected ? "yes" : "no"}</li>
        </ul>
      </div>
    </div>
  );
};
