import AuthLayout from "@/components/layouts/AuthLayout";
import FormForgotPassword from "@/components/fragments/forms/FormForgotPassword";

const ForgotPassword = () => {
  return (
    <>
      <AuthLayout
        title="Lupa kata sandi"
        text="Silahkan masukkan alamat Email Anda untuk menerima kode verifikasi"
        testimonyText="Kami siap membantu. Ikuti langkah-langkah sederhana ini untuk mendapatkan akses kemabli ke Akun anda"
      >
        <FormForgotPassword />
      </AuthLayout>
    </>
  );
};

export default ForgotPassword;
