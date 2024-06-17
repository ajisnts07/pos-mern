import { Link } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import FormPasswordSetting from "@/components/fragments/forms/FormPasswordSetting";

const PasswordSetting = () => {
  return (
    <>
      <MainLayout>
        <div className="mt-6 flex items-center gap-4 border-b border-gray-200 pb-3 dark:border-zinc-900 md:gap-16">
          <Link to="/setting/profile" className="small">
            Profile
          </Link>
          <Link
            to="/setting/password"
            className="small font-semibold text-indigo-950 dark:text-orange-300"
          >
            Password
          </Link>
          <Link to="/setting/payment" className="small">
            Pembayaran
          </Link>
        </div>

        <div className="my-3">
          <h6>Password</h6>
          <p>
           Masukkan kata sandi Anda saat ini dan baru untuk mengatur ulang kata sandi
          </p>
        </div>

        <FormPasswordSetting />
      </MainLayout>
    </>
  );
};

export default PasswordSetting;
