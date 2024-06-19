import MainLayout from "@/components/layouts/MainLayout";
import Table from "@/components/ui/display/Table";
import { columns, initialData } from "../authentication/data";

const PurchaseList = () => {
  return (
    <>
      <MainLayout
        text="Kelola pembelian Anda dengan mudah"
        toButton="/purchase-new"
        childrenButton="Tambah Pembelian"
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

export default PurchaseList;
