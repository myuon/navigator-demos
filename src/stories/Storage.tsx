import { useEffect, useState } from "react";

export const Storage = () => {
  const [estimate, setEstimate] = useState<StorageEstimate>();
  const [persist, setPersist] = useState<boolean>(false);
  const [persisted, setPersisted] = useState<boolean>(false);
  useEffect(() => {
    navigator.storage.estimate().then((estimate) => {
      setEstimate(estimate);
    });
    navigator.storage.persist().then((persist) => {
      setPersist(persist);
    });
    navigator.storage.persisted().then((persisted) => {
      setPersisted(persisted);
    });
  }, []);

  return (
    <div>
      <ul>
        <li>quota: {estimate?.quota}</li>
        <li>usage: {estimate?.usage}</li>
        <li>persist: {persist.toString()}</li>
        <li>persisted: {persisted.toString()}</li>
      </ul>
    </div>
  );
};
