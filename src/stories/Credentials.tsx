import { useEffect, useState } from "react";

export const Credentials: React.FC = () => {
  const [message, setMessage] = useState<string>();
  useEffect(() => {
    if ("credentials" in navigator) {
      try {
        navigator.credentials.get().then((creds) => {
          console.log(creds);
          setMessage("Credentials: " + JSON.stringify(creds));
        });
      } catch (e) {
        console.error(e);
        setMessage((e as Error).message);
      }
    }
  }, []);

  return <p>Message(This may not work properly): {message}</p>;
};
