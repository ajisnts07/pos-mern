import {
  closeNotifyLoading,
  notifyError,
  notifyLoading,
  notifySuccess,
  notifyWarning,
} from "@/components/ui/feedback/Toast";
import { useNavigate } from "react-router-dom";
import ResetPasswordService from "service/authentication/ResetPasswordService";

const SubmitResetPasswordUtil = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const rpid00 = urlParams.get("rpid00");
  const token = urlParams.get("token");

  const handleSubmit = async (e, new_password, confirmation_password) => {
    e.preventDefault();
    let loading;

    try {
      if (new_password !== confirmation_password) {
        notifyWarning("Password dan Konfirmasi Password harus sama");
        return;
      }

      if (!rpid00 | !token) {
        notifyError("Data tidak ditemukan");
        return;
      }

      loading = notifyLoading();

      const response = await ResetPasswordService(new_password, rpid00, token);

      closeNotifyLoading(loading);

      if (response && response.status === 201) {
        notifySuccess("Kata sandi telah direset, silahkan login", () => {
          navigate("/");
        });
      }
    } catch (error) {
      closeNotifyLoading(loading);

      notifyError(error.message);
    }
  };

  return { handleSubmit };
};

export default SubmitResetPasswordUtil;
