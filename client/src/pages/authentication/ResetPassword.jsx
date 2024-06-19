import AuthLayout from "@/components/layouts/AuthLayout";
import FormResetPassword from "@/components/fragments/forms/FormResetPassword";

const ResetPassword = () => {
  return (
    <>
      <AuthLayout
        title="Reset password"
        text="Untuk melanjutkan, masukkan kata sandi baru dan pastikan cocok dengan konfirmasi kata sandi"
        testimonyText="Kata sandi adalah kunci keamanan digital kita. Lindungi diri Anda dengan memilih kata sandi yang kuat dan aman."
      >
        <FormResetPassword />
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
