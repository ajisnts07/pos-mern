import { Link } from "react-router-dom";
import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import Button from "@/components/ui/common/Button";

const FormLogin = () => {
  return (
    <>
      <form method="POST" onSubmit="#">
        <FormControl htmlFor="email" childrenLabel="Email">
          <Input type="email" name="email" autoFocus required />
        </FormControl>
        <FormControl htmlFor="password" childrenLabel="Password">
          <Input type="password" name="password" required />
        </FormControl>

        <Link to="/auth/forgot-password">
          <p className="float-end my-6 text-indigo-950">Lupa kata sandi?</p>
        </Link>

        <Button type="submit" className="w-full" children="Login" />
      </form>
    </>
  );
};

export default FormLogin;
