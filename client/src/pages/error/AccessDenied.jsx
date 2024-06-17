import ErrorLayout from "@/components/layouts/ErrorLayout";

const AccessDenied = () => {
  return (
    <>
      <ErrorLayout>
        <p className="text-center">
          <span className="font-semibold">Access Denied</span> | Anda tidak
          memiliki izin untuk mengunjungi halaman ini{" "}
        </p>
      </ErrorLayout>
    </>
  );
};

export default AccessDenied;
