import MainLayout from "@/components/layouts/MainLayout";
import Table from "@/components/ui/display/Table";
import { columns, initialData } from "../authentication/data";

const SupplierList = () => {
  return (
    <>
      <MainLayout
        text="Kelola supplier Anda dengan mudah"
        toButton="/supplier-new"
        childrenButton="Tambah Supplier"
      >
        <Table
          columns={columns}
          initialData={initialData}
          sorted
          printed
          searched
          totaled
          perPage
          paginated
        />
      </MainLayout>
    </>
  );
};

export default SupplierList;
