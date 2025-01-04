import { useEffect, useState } from "react";

export const GetBattery = () => {
  const [battery, setBattery] = useState<BatteryManager>();
  useEffect(() => {
    navigator.getBattery().then((battery) => {
      console.log(battery);
      setBattery(battery);
    });
  }, []);

  return (
    <div>
      <ul>
        <li>charging: {battery?.charging.toString()}</li>
        <li>chargingTime: {battery?.chargingTime}</li>
        <li>dischargingTime: {battery?.dischargingTime}</li>
        <li>level: {battery?.level}</li>
      </ul>
    </div>
  );
};
