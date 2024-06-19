import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import Table from "@/components/ui/display/Table";
import Alert from "@/components/ui/feedback/Alert";
import IndexProductService from "service/product/IndexProductService";
import DeleteProductService from "service/product/DeleteProductService";
import useData from "@/utils/hooks/useData";
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";

const ProductList = () => {
  const navigate = useNavigate();

  const {
    data,
    total,
    totalPages,
    current,
    token,
    handlePageChange,
    handleSizeChange,
    handleDelete,
  } = useData(IndexProductService, DeleteProductService);

  useEffect(() => {
    if ((token === null) | (token === undefined)) {
      navigate("/");
    }
  }, [navigate, token]);

  const generateColumns = (sampleItem) => {
    const dynamicColumns = [];

    Object.keys(sampleItem)
      .filter((key) => key !== "id" && key !== "image")
      .forEach((key) => {
        dynamicColumns.push({
          key: key,
          label:
            key === "product_name"
              ? "Nama Barang"
              : key === "category"
                ? "Kategori"
                : key === "quantity"
                  ? "Jumlah"
                  : key === "unit"
                    ? "Satuan"
                    : key === "price"
                      ? "Harga"
                      : key === "purchase_price"
                        ? "Harga Beli"
                        : key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/_/g, " "),
        });
      });

    dynamicColumns.push({
      key: "actions",
      label: "Aksi",
      render: (rowData) => (
        <div className="flex gap-2" style={{ alignItems: "center" }}>
          <FiEye
            size={32}
            className="cursor-pointer text-gray-600 dark:text-gray-400"
            onClick={() => handleDelete(rowData)}
          />
          <FiEdit
            size={16}
            className="cursor-pointer text-green-500"
            onClick={() => handleEdit(rowData)}
          />
          <FiTrash
            size={32}
            className="cursor-pointer text-red-500"
            onClick={() => handleDelete(rowData)}
          />
        </div>
      ),
    });

    return dynamicColumns;
  };

  const handleEdit = (rowData) => {
    navigate(`/product-edit/${rowData.id}`);
  };

  const columns = generateColumns(data[0] || {});

  return (
    <>
      <MainLayout
        text="Kelola inventaris barang Anda dengan mudah"
        toButton="/product-new"
        childrenButton="Tambah Barang"
      >
        {token === null || token === undefined ? (
          <Alert type="danger" className="mt-6">
            Unauthorized, silahkan login terlebih dahulu
          </Alert>
        ) : data.length > 0 ? (
          <Table
            columns={columns}
            initialData={data}
            sorted
            printed
            searched
            totaled
            paginated
            current={current}
            total={total}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            handleSizeChange={handleSizeChange}
          />
        ) : (
          <Alert type="info" className="mt-6">
            Tidak ada data
          </Alert>
        )}
      </MainLayout>
    </>
  );
};

export default ProductList;
