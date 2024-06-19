import { Link } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import FormProfileSetting from "@/components/fragments/forms/FormProfileSetting";

const ProfileSetting = () => {
  return (
    <>
      <MainLayout>
        <div className="mt-6 flex items-center gap-4 border-b border-gray-200 pb-3 dark:border-zinc-900 md:gap-16">
          <Link
            to="/setting/profile"
            className="small font-semibold text-indigo-950 dark:text-orange-300"
          >
            Profile
          </Link>
          <Link to="/setting/password" className="small">
            Password
          </Link>
          <Link to="/setting/payment" className="small">
            Pembayaran
          </Link>
        </div>

        <div className="my-3">
          <h6>General</h6>
          <p>
            Info dasar, seperti nama dan alamat Anda yang akan ditampilkan
            kepada publik
          </p>
        </div>

        <FormProfileSetting />
      </MainLayout>
    </>
  );
};

export default ProfileSetting;
