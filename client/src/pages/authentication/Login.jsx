import AuthLayout from "@/components/layouts/AuthLayout";
import FormLogin from "@/components/fragments/forms/FormLogin";

const Login = () => {
  return (
    <>
      <AuthLayout
        title="Selamat datang!"
        text="Silahkan masukkan kredensial Anda untuk masuk!"
        testimonyText="Kami bangga menawarkan fitur-fitur unggulan seperti manajemen stok
          yang terintegrasi, pencatatan transaksi yang mudah dan laporan
          penjualan yang terperinci."
      >
        <FormLogin />
      </AuthLayout>
    </>
  );
};

export default Login;
