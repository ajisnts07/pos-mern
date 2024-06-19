import { useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import Button from "@/components/ui/common/Button";
import Toast from "@/components/ui/feedback/Toast";
import LoginUtil from "@/utils/pages/LoginUtil";

const FormLogin = () => {
  const { handleInvalid, handleChange, handleSubmit, locked, lockTime } =
    LoginUtil();
  const toastId = useRef(null);

  useEffect(() => {
    if (locked) {
      const remainingTime = Math.ceil((lockTime - Date.now()) / 1000) * 1000;

      toastId.current = toast.info(
        `Coba lagi dalam ${Math.ceil((lockTime - Date.now()) / 1000)} detik`,
        {
          closeButton: false,
          draggable: false,
          autoClose: remainingTime,
          hideProgressBar: true,
          className: "dark:bg-zinc-900",
          style: { borderRadius: "12px" },
        },
      );

      const interval = setInterval(() => {
        const secondsLeft = Math.ceil((lockTime - Date.now()) / 1000);

        if (secondsLeft > 1) {
          toast.update(toastId.current, {
            render: `Coba lagi dalam ${secondsLeft} detik`,
          });
        } else {
          toast.dismiss(toastId.current);
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [locked, lockTime]);

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
        </FormControl>
        <FormControl htmlFor="password" childrenLabel="Password">
          <Input
            type="password"
            name="password"
            onInvalid={handleInvalid}
            onChange={handleChange}
            required
          />
        </FormControl>

        <Link to="/auth/forgot-password">
          <p className="float-end my-6 text-indigo-950">Lupa kata sandi?</p>
        </Link>

        <Button
          type="submit"
          className="w-full"
          children={locked ? "Tunggu beberapa saat" : "Login"}
          disabled={locked ? true : false}
        />

        <Toast />
      </form>
    </>
  );
};

export default FormLogin;
