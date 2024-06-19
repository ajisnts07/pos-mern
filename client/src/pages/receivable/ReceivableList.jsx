import MainLayout from "@/components/layouts/MainLayout";
import Table from "@/components/ui/display/Table";
import { columns, initialData } from "../authentication/data";

const ReceivableList = () => {
  return (
    <>
      <MainLayout
        text="Kelola piutang Anda dengan mudah"
        toButton="/receivable-new"
        childrenButton="Tambah Piutang"
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

export default ReceivableList;
