import ErrorLayout from "@/components/layouts/ErrorLayout";

const NotFound = () => {
  return (
    <>
      <ErrorLayout>
        <p className="text-center">
          <span className="font-bold">404 </span>| Halaman ini tidak ditemukan
        </p>
      </ErrorLayout>
    </>
  );
};

export default NotFound;
