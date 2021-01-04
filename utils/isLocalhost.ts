export default () => () => {
  if (typeof window !== "undefined") {
    return process.env.NODE_ENV === "development";
  } else {
    return (
      location.hostname === "localhost" || location.hostname === "127.0.0.1"
    );
  }
};
