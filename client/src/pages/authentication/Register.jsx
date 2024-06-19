import AuthLayout from "@/components/layouts/AuthLayout";
import FormRegister from "@/components/fragments/forms/FormRegister";

const Register = () => {
  return (
    <>
      <AuthLayout
        title="Register"
        text="Ayo bergabung! Daftar Akun sekarang dan mulailah pengalaman yang baik"
        testimonyText="Kami bangga menawarkan fitur-fitur unggulan seperti manajemen stok yang terintegrasi, pencatatan transaksi yang mudah dan laporan penjualan yang terperinci."
      >
        <FormRegister />
      </AuthLayout>
    </>
  );
};

export default Register;
