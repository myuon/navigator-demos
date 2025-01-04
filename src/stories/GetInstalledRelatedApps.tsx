import { useEffect, useState } from "react";

export const GetInstalledRelatedApps = () => {
  const [apps, setApps] = useState<unknown[]>([]);
  useEffect(() => {
    navigator.getInstalledRelatedApps().then((apps) => {
      console.log(apps);
      setApps(apps);
    });
  }, []);

  return (
    <div>
      <p>This example only works on the top-level browsing context.</p>
      <p>This example is not a proper demo.</p>
      <p>Installed Related Apps: {apps.length}</p>
    </div>
  );
};
