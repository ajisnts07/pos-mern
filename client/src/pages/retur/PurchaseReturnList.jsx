import MainLayout from "@/components/layouts/MainLayout";
import Table from "@/components/ui/display/Table";
import { columns, initialData } from "../authentication/data";

const PurchaseReturnList = () => {
  return (
    <>
      <MainLayout
        text="Kelola retur Anda dengan mudah"
        toButton="/retur-new"
        childrenButton="Tambah Retur"
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

export default PurchaseReturnList;
