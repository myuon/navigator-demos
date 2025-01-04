export const GetGamepads = () => {
  console.log(navigator.getGamepads());

  return (
    <div>
      <p>Gamepad: {navigator.getGamepads().length}</p>

      {navigator.getGamepads().map((gamepad, index) => {
        return (
          <div key={index}>
            <h3>Gamepad {index}</h3>
            <ul>
              <li>id: {gamepad?.id}</li>
              <li>index: {gamepad?.index}</li>
              <li>connected: {gamepad?.connected.toString()}</li>
              <li>mapping: {gamepad?.mapping}</li>
              <li>timestamp: {gamepad?.timestamp}</li>
              <li>axes: {gamepad?.axes.join(", ")}</li>
              <li>
                buttons:{" "}
                {gamepad?.buttons.map((button, index) => {
                  return <span key={index}>{button.pressed ? "1" : "0"}</span>;
                })}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
