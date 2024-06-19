import { useState, useEffect } from "react";

const LockLoginUtil = () => {
  const [loginAttempts, setLoginAttempts] = useState(
    parseInt(localStorage.getItem("loginAttempts")) || 0,
  );
  const [locked, setLocked] = useState(
    localStorage.getItem("locked") === "true",
  );
  const [lockTime, setLockTime] = useState(
    parseInt(localStorage.getItem("lockTime")) || null,
  );

  useEffect(() => {
    if (locked) {
      const remainingLockTime = lockTime - Date.now();

      if (remainingLockTime > 0) {
        const timeoutId = setTimeout(() => {
          setLocked(false);
          setLoginAttempts(0);

          localStorage.removeItem("locked");
          localStorage.removeItem("loginAttempts");
          localStorage.removeItem("lockTime");
        }, remainingLockTime);

        return () => clearTimeout(timeoutId);
      } else {
        setLocked(false);
        setLoginAttempts(0);

        localStorage.removeItem("locked");
        localStorage.removeItem("loginAttempts");
        localStorage.removeItem("lockTime");
      }
    }
  }, [locked, lockTime]);

  return {
    loginAttempts,
    setLoginAttempts,
    locked,
    setLocked,
    lockTime,
    setLockTime,
  };
};

export default LockLoginUtil;
