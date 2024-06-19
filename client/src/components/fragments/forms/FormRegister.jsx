import Step, { StepItem } from "@/components/ui/navigation/Step";
import FormControl from "@/components/ui/forms/FormControl";
import InputGroup from "@/components/ui/forms/InputGroup";
import Input from "@/components/ui/forms/Input";
import Select from "@/components/ui/forms/Select";
import TextArea from "@/components/ui/forms/TextArea";
import Upload from "@/components/ui/forms/Upload";
import Button from "@/components/ui/common/Button";
import Toast from "@/components/ui/feedback/Toast";
import ShowPasswordUtil from "@/utils/configs/display/ShowPasswordUtil";
import RegisterUtil from "@/utils/pages/RegisterUtil";
import OnKeyDownUtil from "@/utils/props/keydown/OnKeyDownUtil";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const FormRegister = () => {
  const {
    showPassword,
    showConfirmationPassword,
    handleShowPassword,
    handleShowConfirmationPassword,
  } = ShowPasswordUtil();

  const {
    accountFilled,
    dataFilled,
    jobFilled,
    image,
    error,

    handleChangeRole,
    handleChangeGender,
    handleChangePosition,
    handleChangeImage,
    handleDrop,
    handleFileReset,
    handleInvalid,
    handleChange,
    handleSubmit,
  } = RegisterUtil();

  const { handleNumberKey } = OnKeyDownUtil();

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="pb-6 md:pe-12">
          <Step>
            <StepItem
              active
              checked={accountFilled && true}
              number={1}
              children="Akun"
            />
            <StepItem
              active={accountFilled && true}
              checked={dataFilled && true}
              number={2}
              children="Data Diri"
            />
            <StepItem
              active={dataFilled && true}
              checked={jobFilled && true}
              number={3}
              children="Pekerjaan"
            />
          </Step>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="col-span-1">
            <FormControl htmlFor="email" childrenLabel="Email">
              <Input
                type="email"
                name="email"
                onInvalid={handleInvalid}
                onChange={handleChange}
                autoFocus
                required
              />
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
                onInvalid={handleInvalid}
                onChange={handleChange}
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
                onInvalid={handleInvalid}
                onChange={handleChange}
                minLength={6}
                required
              />
            </InputGroup>
            <FormControl childrenLabel="Role">
              <Select name="role" onChange={handleChangeRole}>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </Select>
            </FormControl>
          </div>

          <div className="col-span-1">
            <FormControl htmlFor="name" childrenLabel="Nama">
              <Input
                type="text"
                name="name"
                onInvalid={handleInvalid}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl childrenLabel="Jenis Kelamin">
              <Select
                name="gender"
                placeholder="Buka menu pilihan ini..."
                onChange={handleChangeGender}
              >
                <option value="Male">Laki-laki</option>
                <option value="Female">Perempuan</option>
              </Select>
            </FormControl>
            <FormControl htmlFor="address" childrenLabel="Alamat">
              <TextArea
                name="address"
                onInvalid={handleInvalid}
                onChange={handleChange}
                cols={10}
                rows={5}
                required
              />
            </FormControl>
            <FormControl htmlFor="phone_number" childrenLabel="No Telepon">
              <Input
                type="tel"
                name="phone_number"
                onInvalid={handleInvalid}
                onChange={handleChange}
                onKeyDown={handleNumberKey}
                minLength={12}
                maxLength={13}
                required
              />
            </FormControl>
            <FormControl htmlFor="image" childrenLabel="Foto">
              <Upload
                name="image"
                draggable
                image={image}
                error={error}
                handleChangeImage={handleChangeImage}
                handleDrop={handleDrop}
                handleFileReset={handleFileReset}
              />
            </FormControl>
            <FormControl childrenLabel="Posisi">
              <Select
                name="position"
                placeholder="Buka menu pilihan ini..."
                onChange={handleChangePosition}
              >
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

        <Toast />
      </form>
    </>
  );
};

export default FormRegister;
