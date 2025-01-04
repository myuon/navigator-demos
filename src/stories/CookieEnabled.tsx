export const CookieEnabled: React.FC = () => {
  return (
    <div>
      <p>CookieEnabled: {navigator.cookieEnabled.toString()}</p>
    </div>
  );
};
