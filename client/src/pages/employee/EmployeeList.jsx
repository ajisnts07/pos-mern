import MainLayout from "@/components/layouts/MainLayout";
import Table from "@/components/ui/display/Table";
import { columns, initialData } from "../authentication/data";

const EmployeeList = () => {
  return (
    <>
      <MainLayout
        text="Kelola karyawan Anda dengan mudah"
        toButton="/employee-new"
        childrenButton="Tambah Karyawan"
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

export default EmployeeList;
