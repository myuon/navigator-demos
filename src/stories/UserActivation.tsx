import { useEffect, useState } from "react";

export const UserActivation = () => {
  const [isActive, setIsActive] = useState<boolean>();
  const [hasBeenActive, setHasBeenActive] = useState<boolean>();

  useEffect(() => {
    setInterval(() => {
      setIsActive(navigator.userActivation.isActive);
      setHasBeenActive(navigator.userActivation.hasBeenActive);
    }, 1000);
  }, []);

  return (
    <div>
      <p>isActive: {isActive?.toString() ?? "-"}</p>
      <p>hasBeenActive: {hasBeenActive?.toString() ?? "-"}</p>
    </div>
  );
};
