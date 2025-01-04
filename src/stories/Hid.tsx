import { useState } from "react";

export const Hid = () => {
  const [devices, setDevices] = useState<HIDDevice[]>();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigator.hid.getDevices().then((devices) => {
              console.log(devices);
              setDevices(devices);
            });
          }}
        >
          GetDevices
        </button>

        <ul>
          {devices?.map((device) => (
            <li key={device.productId}>
              <ul>
                <li>VendorId: {device.vendorId}</li>
                <li>ProductId: {device.productId}</li>
                <li>Product Name: {device.productName}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
