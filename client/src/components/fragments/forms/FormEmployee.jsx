import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import InputGroup from "@/components/ui/forms/InputGroup";
import Select from "@/components/ui/forms/Select";
import TextArea from "@/components/ui/forms/TextArea";
import Upload from "@/components/ui/forms/Upload";
import Button from "@/components/ui/common/Button";
import ShowPasswordUtil from "@/utils/configs/display/ShowPasswordUtil";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const FormEmployee = () => {
  const {
    showPassword,
    showConfirmationPassword,
    handleShowPassword,
    handleShowConfirmationPassword,
  } = ShowPasswordUtil();

  return (
    <>
      <form method="POST">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <h6>Akun</h6>
              <p>Bagian untuk mengonfigurasi akun</p>
            </div>

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
            <div className="mb-3">
              <h6>Informasi Dasar</h6>
              <p>Bagian untuk mengonfigurasi informasi dasar</p>
            </div>

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
            <FormControl childrenLabel="Posisi">
              <Select name="position">
                <option value="Owner">Pemilik</option>
                <option value="Cashier">Kasir</option>
              </Select>
            </FormControl>
            <FormControl htmlFor="image" childrenLabel="Foto">
              <Upload name="image" draggable />
            </FormControl>
          </div>
        </div>

        <Button className="float-end mt-12 w-full md:w-1/4" children="Simpan" />
      </form>
    </>
  );
};

export default FormEmployee;
