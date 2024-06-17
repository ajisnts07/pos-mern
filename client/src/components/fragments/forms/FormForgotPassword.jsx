import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import Button from "@/components/ui/common/Button";

const FormForgotPassword = () => {
  return (
    <>
      <form method="POST" onSubmit="#">
        <FormControl htmlFor="email" childrenLabel="Email">
          <Input type="email" name="email" autoFocus required />

          <Button type="submit" className="mt-12 w-full" children="Kirim" />
        </FormControl>
      </form>
    </>
  );
};

export default FormForgotPassword;
