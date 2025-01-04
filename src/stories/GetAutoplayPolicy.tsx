export const GetAutoplayPolicy = () => {
  return (
    <div>
      <p>mediaelement: {navigator.getAutoplayPolicy("mediaelement")}</p>
      <p>audiocontext: {navigator.getAutoplayPolicy("audiocontext")}</p>
    </div>
  );
};
