import MainLayout from "@/components/layouts/MainLayout";
import Table from "@/components/ui/display/Table";
import { columns, initialData } from "../authentication/data";

const CustomerList = () => {
  return (
    <>
      <MainLayout
        text="Kelola pelanggan Anda dengan mudah"
        toButton="/customer-new"
        childrenButton="Tambah Pelanggan"
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

export default CustomerList;
