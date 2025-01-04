import { useEffect, useState } from "react";

export const ContactsManager: React.FC = () => {
  const [props, setProperty] = useState<string[]>([]);
  useEffect(() => {
    if (navigator.contacts) {
      navigator.contacts.getProperties().then((properties) => {
        console.log(properties);
        setProperty(properties);
      });
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contacts, setContacts] = useState<any[]>();

  const [error, setError] = useState<string>();

  return (
    <div>
      <p>Error: {error}</p>

      <p>
        Supported:{" "}
        {("contacts" in navigator && "ContactsManager" in window).toString()}
      </p>

      <p>Properties: {props?.join(", ")}</p>

      <div>
        <button
          onClick={async () => {
            try {
              if (navigator.contacts) {
                const contacts = await navigator.contacts.select(props, {
                  multiple: true,
                });

                console.log(contacts);
                setContacts(contacts);
              }
            } catch (e) {
              console.error(e);
              setError((e as Error).message);
            }
          }}
        >
          Get Contacts
        </button>
      </div>

      <div>
        {contacts?.map((contact) => (
          <ul key={contact.name}>
            <li>Name: {contact.name.join(",")}</li>
            <li>Email: {contact.email.join(",")}</li>
            <li>Tel: {contact.tel.join(",")}</li>
            <li>
              {contact.address.map((address: object) => (
                <span>{JSON.stringify(address)}</span>
              ))}
            </li>
            <li>
              Icon:{" "}
              {contact.icon.map((blob: Blob) => (
                <img src={URL.createObjectURL(blob)} alt="Contact" />
              ))}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
