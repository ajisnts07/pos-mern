import { useState, useEffect } from "react";

const OnlineStatusUtil = () => {
  const [online, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
    };

    const handleOffline = () => {
      setOnline(false);
    };

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const statusType = online ? "success" : "danger";
  const statusText = online ? "Online" : "Offline";

  return {
    statusType,
    statusText,
  };
};

export default OnlineStatusUtil;
