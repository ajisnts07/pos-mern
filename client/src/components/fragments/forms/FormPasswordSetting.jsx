import InputGroup from "@/components/ui/forms/InputGroup";
import Input from "@/components/ui/forms/Input";
import Button from "@/components/ui/common/Button";
import ShowPasswordUtil from "@/utils/configs/display/ShowPasswordUtil";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const FormPasswordSetting = () => {
  const {
    showPassword,
    showConfirmationPassword,
    handleShowPassword,
    handleShowConfirmationPassword,
  } = ShowPasswordUtil();

  return (
    <>
      <form method="POST">
        <InputGroup
          htmlFor="password"
          className="items-center justify-start gap-44 md:flex"
          childrenLabel="Kata Sandi Lama"
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
            name="password"
            minLength={6}
            required
          />
        </InputGroup>

        <InputGroup
          htmlFor="password"
          className="items-center justify-start gap-44 md:flex"
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
            name="password"
            minLength={6}
            required
          />
        </InputGroup>

        <InputGroup
          htmlFor="confirmation_password"
          className="items-center gap-48 md:flex"
          childrenLabel="Konfirmasi"
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
            minLength={6}
            required
          />
        </InputGroup>

        <Button className="float-end mt-12 w-full md:w-1/4" children="Simpan" />
      </form>
    </>
  );
};

export default FormPasswordSetting;
