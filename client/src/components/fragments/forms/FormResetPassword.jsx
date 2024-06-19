import InputGroup from "@/components/ui/forms/InputGroup";
import Input from "@/components/ui/forms/Input";
import Button from "@/components/ui/common/Button";
import Toast from "@/components/ui/feedback/Toast";
import ShowPasswordUtil from "@/utils/configs/display/ShowPasswordUtil";
import ResetPasswordUtil from "@/utils/pages/ResetPasswordUtil";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const FormResetPassword = () => {
  const {
    showPassword,
    showConfirmationPassword,
    handleShowPassword,
    handleShowConfirmationPassword,
  } = ShowPasswordUtil();
  const { handleInvalid, handleChange, handleSubmit } = ResetPasswordUtil();

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <InputGroup
          htmlFor="new_password"
          childrenLabel="Kata Sandi Baru"
          childrenGroup={
            <>
              <button type="button" onClick={handleShowPassword}>
                {showPassword ? (
                  <FaEyeSlash className="text-orange-300" size={16} />
                ) : (
                  <FaEye className="text-gray-200" size={16} />
                )}
              </button>
            </>
          }
        >
          <Input
            type={showPassword ? "text" : "password"}
            name="new_password"
            className="lowercase"
            minLength={6}
            onInvalid={handleInvalid}
            onChange={handleChange}
            autoFocus
            required
          />
        </InputGroup>
        <InputGroup
          htmlFor="confirmation_password"
          childrenLabel="Konfirmasi Kata Sandi"
          childrenGroup={
            <>
              <button type="button" onClick={handleShowConfirmationPassword}>
                {showConfirmationPassword ? (
                  <FaEyeSlash className="text-orange-300" size={16} />
                ) : (
                  <FaEye className="text-gray-200" size={16} />
                )}
              </button>
            </>
          }
        >
          <Input
            type={showConfirmationPassword ? "text" : "password"}
            name="confirmation_password"
            className="lowercase"
            minLength={6}
            onInvalid={handleInvalid}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <Button type="submit" className="mt-12 w-full" children="Kirim" />

        <Toast/>
      </form>
    </>
  );
};

export default FormResetPassword;
