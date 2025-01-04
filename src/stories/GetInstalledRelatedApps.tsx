import { useEffect, useState } from "react";

export const GetInstalledRelatedApps = () => {
  const [apps, setApps] = useState<unknown[]>([]);
  useEffect(() => {
    navigator.getInstalledRelatedApps().then((apps) => {
      console.log(apps);
      setApps(apps);
    });
  }, []);

  const [registration, setRegistration] = useState<string>();

  return (
    <div>
      <button
        onClick={async () => {
          if ("serviceWorker" in navigator) {
            const reg = await navigator.serviceWorker.register("/sw.js");
            if (reg.installing) {
              setRegistration("installing");
            } else if (reg.waiting) {
              setRegistration("waiting");
            } else if (reg.active) {
              setRegistration("active");
            }
          }
        }}
      >
        Install
      </button>
      <p>Service Worker Registration: {registration}</p>
      <p>This example only works on the top-level browsing context.</p>
      <p>This example is not a proper demo.</p>
      <p>Installed Related Apps: {apps.length}</p>
    </div>
  );
};
