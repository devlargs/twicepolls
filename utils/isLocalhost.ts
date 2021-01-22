const isMe = () => {
  if (process.browser) {
    const urlParams = new URLSearchParams(window.location.search);
    const bool = urlParams.get("me");
    let me: boolean = false;

    if (bool && (bool === "true" || bool === "false")) {
      me = JSON.parse(bool);
    }

    return me;
  }

  return false;
};

const isLocalhost = () =>
  process.browser
    ? (location.hostname === "localhost" ||
        location.hostname === "127.0.0.1" ||
        location.hostname.includes("192.168")) &&
      !isMe()
    : process.env.NODE_ENV === "development";

const local = isLocalhost();

export default local;
