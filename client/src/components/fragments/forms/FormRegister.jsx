import Step, { StepItem } from "@/components/ui/navigation/Step";
import FormControl from "@/components/ui/forms/FormControl";
import InputGroup from "@/components/ui/forms/InputGroup";
import Input from "@/components/ui/forms/Input";
import Select from "@/components/ui/forms/Select";
import TextArea from "@/components/ui/forms/TextArea";
import Upload from "@/components/ui/forms/Upload";
import Button from "@/components/ui/common/Button";
import ShowPasswordUtil from "@/utils/configs/display/ShowPasswordUtil";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const FormRegister = () => {
  const {
    showPassword,
    showConfirmationPassword,
    handleShowPassword,
    handleShowConfirmationPassword,
  } = ShowPasswordUtil();

  return (
    <>
      <form method="POST" onSubmit="#">
        <div className="pb-6 md:pe-12">
          <Step>
            <StepItem active number={1} children="Akun" />
            <StepItem number={2} children="Data Diri" />
            <StepItem number={3} children="Pekerjaan" />
          </Step>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="col-span-1">
            <FormControl htmlFor="email" childrenLabel="Email">
              <Input type="email" name="email" autoFocus required />
            </FormControl>
            <InputGroup
              htmlFor="password"
              childrenLabel="Kata Sandi"
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
              childrenLabel="Konfirmasi Kata Sandi"
              childrenGroup={
                <>
                  <button
                    type="button"
                    onClick={handleShowConfirmationPassword}
                  >
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
            <FormControl childrenLabel="Role">
              <Select name="role">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </Select>
            </FormControl>
          </div>

          <div className="col-span-1">
            <FormControl htmlFor="name" childrenLabel="Nama">
              <Input type="text" name="name" required />
            </FormControl>
            <FormControl childrenLabel="Jenis Kelamin">
              <Select name="gender">
                <option value="Male">Laki-laki</option>
                <option value="Female">Perempuan</option>
              </Select>
            </FormControl>
            <FormControl htmlFor="address" childrenLabel="Alamat">
              <TextArea name="address" cols={10} rows={5} required />
            </FormControl>
            <FormControl htmlFor="phone_number" childrenLabel="No Telepon">
              <Input
                type="tel"
                name="phone_number"
                minLength={12}
                maxLength={13}
                required
              />
            </FormControl>
            <FormControl htmlFor="image" childrenLabel="Foto">
              <Upload name="image" draggable />
            </FormControl>
            <FormControl childrenLabel="Posisi">
              <Select name="position">
                <option value="Owner">Pemilik</option>
                <option value="Cashier">Kasir</option>
              </Select>
            </FormControl>

            <Button
              type="submit"
              children="Simpan"
              className="float-end mt-12 w-full md:w-fit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormRegister;
