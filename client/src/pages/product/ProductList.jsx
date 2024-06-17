import MainLayout from "@/components/layouts/MainLayout";
import Table from "@/components/ui/display/Table";
import { columns, initialData } from "../authentication/data";

const ProductList = () => {
  return (
    <>
      <MainLayout
        text="Kelola inventaris barang Anda dengan mudah"
        toButton="/product-new"
        childrenButton="Tambah Barang"
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

export default ProductList;
