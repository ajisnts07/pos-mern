import MainLayout from "@/components/layouts/MainLayout";
import Table from "@/components/ui/display/Table";
import { columns, initialData } from "../authentication/data";

const SaleList = () => {
  return (
    <>
      <MainLayout
        text="Kelola penjualan Anda dengan mudah"
        toButton="/sale-new"
        childrenButton="Tambah Penjualan"
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

export default SaleList;
