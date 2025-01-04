import { useEffect, useState } from "react";

export const ContactsManager: React.FC = () => {
  const [props, setProperty] = useState<string[] | undefined>();
  useEffect(() => {
    if (navigator.contacts) {
      navigator.contacts.getProperties().then((properties) => {
        console.log(properties);
        setProperty(properties);
      });
    }
  }, []);

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
              const contacts = await navigator.contacts.select(props, {
                multiple: true,
              });

              console.log(contacts);
              setContacts(contacts);
            } catch (e) {
              console.error(e);
              setError(e.message);
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
              {contact.address.map((address) => (
                <span>{JSON.stringify(address)}</span>
              ))}
            </li>
            <li>
              Icon:{" "}
              {contact.icon.map((blob) => (
                // <Img blob={contact.icon} />
                <img src={URL.createObjectURL(blob)} alt="Contact" />
              ))}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

const Img: React.FC<{ blob: string }> = ({ blob }: { blob: Blob }) => {
  const [url, setUrl] = useState<string>();
  useEffect(() => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      setUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [blob]);

  return <img src={url} alt="Contact" />;
};
