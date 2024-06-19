import { useState, useEffect } from "react";
import {
  closeNotifyLoading,
  notifyError,
  notifyLoading,
  notifyWarning,
  notifySuccess,
} from "@/components/ui/feedback/Toast";
import ForgotPasswordService from "service/authentication/ForgotPasswordService";
import ValidEmailUtil from "@/utils/helpers/ValidEmailUtil";

const SubmitForgotPasswordUtil = () => {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastSentTime = localStorage.getItem("forgotPasswordLastSentTime");
      const currentTime = Date.now();
      const fiveMinutes = 5 * 60 * 1000; // lock minute

      if (lastSentTime) {
        const timeElapsed = currentTime - lastSentTime;

        if (timeElapsed < fiveMinutes) {
          setRemainingTime(Math.ceil((fiveMinutes - timeElapsed) / 1000));
        } else {
          localStorage.removeItem("forgotPasswordLastSentTime");

          setRemainingTime(null);
        }
      } else {
        setRemainingTime(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e, email) => {
    e.preventDefault();
    let loading;
    const lastSentTime = localStorage.getItem("forgotPasswordLastSentTime");
    const currentTime = Date.now();
    const fiveMinutes = 5 * 60 * 1000; // lock minute

    try {
      if (!ValidEmailUtil(email)) {
        notifyWarning("Silahkan isi alamat email yang valid");
        return;
      }

      if (lastSentTime) {
        const timeElapsed = currentTime - lastSentTime;

        if (timeElapsed < fiveMinutes) {
          const minutesRemaining = Math.ceil(
            (fiveMinutes - timeElapsed) / 60000,
          );

          notifyWarning(
            `Anda hanya dapat mengirim permintaan lupa kata sandi setiap 5 menit sekali. Silahkan tunggu ${minutesRemaining} menit lagi`,
          );
          return;
        } else {
          localStorage.removeItem("forgotPasswordLastSentTime");
        }
      }

      loading = notifyLoading();

      const response = await ForgotPasswordService(email);

      closeNotifyLoading(loading);

      if (response.status === 200) {
        closeNotifyLoading(loading);
        notifySuccess("Reset link password berhasil terkirim", () => {
          window.location.reload();
        });

        localStorage.setItem("forgotPasswordLastSentTime", currentTime);
      }
    } catch (error) {
      closeNotifyLoading(loading);

      notifyError(error.message);
    }
  };

  return { handleSubmit };
};

export default SubmitForgotPasswordUtil;
