export const RegisterProtocolHandler = () => {
  const burger = window.location.href
    ?.split("#burger=")[1]
    ?.replace("web%2Bburger%3A", "");

  return (
    <div>
      <button
        onClick={() => {
          navigator.registerProtocolHandler(
            "web+burger",
            window.location.href + "#burger=%s"
          );
        }}
      >
        Register [{window.location.href + "#burger=%s"}] to web+burger
      </button>

      <div>
        <div>
          <a href={`web+burger:cheeseburger`}>Open cheeseburger</a>
        </div>
        <div>
          <a href={`web+burger:cheeseburger`}>Open BLT</a>
        </div>
      </div>

      <textarea
        readOnly
        value={burger ? `Hi! You ordered ${burger}!!` : ""}
        style={{ width: "100%", height: "100px" }}
      ></textarea>
    </div>
  );
};
