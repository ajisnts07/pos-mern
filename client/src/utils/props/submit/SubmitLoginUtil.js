import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  notifyWarning,
  notifyError,
  notifyLoading,
  closeNotifyLoading,
} from "@/components/ui/feedback/Toast";
import LoginService from "service/authentication/LoginService";
import LockLoginUtil from "@/utils/configs/display/LockLoginUtil";
import ValidEmailUtil from "@/utils/helpers/ValidEmailUtil";

const SubmitLoginUtil = () => {
  const navigate = useNavigate();
  const {
    loginAttempts,
    setLoginAttempts,
    locked,
    setLocked,
    lockTime,
    setLockTime,
  } = LockLoginUtil();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    let loading;

    try {
      if (!ValidEmailUtil(email)) {
        notifyWarning("Silahkan isi email yang valid");

        return;
      }

      loading = notifyLoading();

      const response = await LoginService(email, password);

      if (response && response.code === 200) {
        const token = response.token;
        const id = response.id;

        Cookies.set("token", token, {
          expires: 1 / 24,
          secure: true,
          sameSite: "strict",
        });

        Cookies.set("_id", id, {
          expires: 1 / 24,
          secure: true,
          sameSite: "strict",
        });

        closeNotifyLoading(loading);

        setLoginAttempts(0);

        localStorage.removeItem("loginAttempts");
        localStorage.removeItem("locked");
        localStorage.removeItem("lockTime");

        if (response && response.role === "Admin") {
          navigate("/dashboard/admin");

          return response;
        } else {
          navigate("/dashboard");
        }
      } else {
        setLoginAttempts((prevAttempts) => {
          const newAttempts = prevAttempts + 1;

          if (newAttempts >= 5) {
            const lockTime = Date.now() + 2 * 60 * 1000; // lock minute
            setLocked(true);
            setLockTime(lockTime);
            localStorage.setItem("locked", "true");
            localStorage.setItem("lockTime", lockTime.toString());
            setTimeout(
              () => {
                setLocked(false);
                setLoginAttempts(0);
                localStorage.removeItem("locked");
                localStorage.removeItem("loginAttempts");
                localStorage.removeItem("lockTime");
              },
              2 * 60 * 1000,
            ); // unlock
          }

          localStorage.setItem("loginAttempts", newAttempts.toString());

          return newAttempts;
        });
      }

      closeNotifyLoading(loading);
    } catch (error) {
      closeNotifyLoading(loading);

      notifyError(error.message);
    }
  };

  return { handleSubmit, loginAttempts, locked, lockTime };
};

export default SubmitLoginUtil;
