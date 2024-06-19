import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import Button from "@/components/ui/common/Button";
import Toast from "@/components/ui/feedback/Toast";
import ForgotPasswordUtil from "@/utils/pages/ForgotPasswordUtil";

const FormForgotPassword = () => {
  const { handleInvalid, handleChange, handleSubmit } = ForgotPasswordUtil();

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <FormControl htmlFor="email" childrenLabel="Email">
          <Input
            type="email"
            name="email"
            onInvalid={handleInvalid}
            onChange={handleChange}
            autoFocus
            required
          />

          <Button type="submit" className="mt-12 w-full" children="Kirim" />
        </FormControl>

        <Toast />
      </form>
    </>
  );
};

export default FormForgotPassword;
