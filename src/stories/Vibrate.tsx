export const Vibrate = () => {
  return (
    <div>
      <button
        onClick={() => {
          const ok = navigator.vibrate(1500);
          if (!ok) {
            throw new Error("Vibration failed");
          }
        }}
      >
        Vibrate
      </button>
      <button
        onClick={() => {
          navigator.vibrate(0);
        }}
      >
        Stop vibrate
      </button>
    </div>
  );
};
