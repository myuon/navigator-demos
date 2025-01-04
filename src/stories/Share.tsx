export const Share = () => {
  return (
    <button
      onClick={() => {
        navigator.share({
          title: "Example Page",
          text: "Hello, World!",
          url: "https://example.com",
        });
      }}
    >
      Share
    </button>
  );
};
