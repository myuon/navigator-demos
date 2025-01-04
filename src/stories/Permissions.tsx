import { useEffect, useState } from "react";

export const Permissions = ({ apiSet = [] }: { apiSet: string[] }) => {
  const [permissions, setPermissions] = useState<PermissionStatus[]>([]);

  useEffect(() => {
    apiSet.forEach((api) => {
      navigator.permissions
        .query({ name: api as PermissionName })
        .then((permission) => {
          setPermissions((prev) => [
            ...prev.filter((p) => p.name !== permission.name),
            permission,
          ]);
        })
        .catch((e) => {
          setPermissions((prev) => [
            ...prev.filter((p) => p.name !== api),
            { name: api, state: (e as Error).message } as PermissionStatus,
          ]);
        });
    });
  }, [apiSet]);

  return (
    <div>
      {permissions.map((permission) => (
        <div key={permission.name}>
          <p>
            {permission.name}: {permission.state}
          </p>
        </div>
      ))}
    </div>
  );
};
