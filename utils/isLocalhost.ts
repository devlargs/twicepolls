const isLocalhost = () =>
  process.browser
    ? location.hostname === "localhost" ||
      location.hostname === "127.0.0.1" ||
      location.hostname.includes("192.168")
    : process.env.NODE_ENV === "development";

export default isLocalhost;
