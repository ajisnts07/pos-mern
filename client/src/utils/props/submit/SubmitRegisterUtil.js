import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import RegisterService from "service/authentication/RegisterService";
import ValidEmailUtil from "@/utils/helpers/ValidEmailUtil";
import {
  closeNotifyLoading,
  notifyError,
  notifyLoading,
  notifySuccess,
  notifyWarning,
} from "@/components/ui/feedback/Toast";

const SubmitRegisterUtil = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    e,
    email,
    password,
    confirmation_password,
    role,
    name,
    gender,
    address,
    phone_number,
    image,
    position,
  ) => {
    e.preventDefault();
    let loading;

    try {
      if (!ValidEmailUtil(email)) {
        notifyWarning("Silahkan isi email yang valid");
        return;
      }

      if (password !== confirmation_password) {
        notifyWarning("Password dan Konfirmasi Password harus sama");
        return;
      }

      if (role === undefined) {
        notifyWarning("Silahkan pilih Role terlebih dahulu");
        return;
      } else if (gender === undefined) {
        notifyWarning("Silahkan pilih Jenis Kelamin terlebih dahulu");
        return;
      } else if (position === undefined) {
        notifyWarning("Silahkan pilih Posisi terlebih dahulu");
        return;
      }

      loading = notifyLoading();

      const token = Cookies.get("token");
      if (!token) {
        notifyError("Unauthorized, silahkan login ulang terlebih dahulu");

        setTimeout(() => {
          navigate("/");
        }, 5000);
      }

      const response = await RegisterService(
        email,
        password,
        role,
        name,
        gender,
        address,
        phone_number,
        image,
        position,
        token,
      );

      if (response.status === 201) {
        closeNotifyLoading(loading);
        notifySuccess("Data berhasil ditambahkan", () => {
          window.location.reload();
        });
      }
    } catch (error) {
      closeNotifyLoading(loading);

      notifyError(error.message);
    }
  };

  return { handleSubmit };
};

export default SubmitRegisterUtil;
