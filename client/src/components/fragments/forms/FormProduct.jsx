import { useEffect } from "react";
import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import Select from "@/components/ui/forms/Select";
import Upload from "@/components/ui/forms/Upload";
import Button from "@/components/ui/common/Button";
import Toast from "@/components/ui/feedback/Toast";
import ProductUtil from "@/utils/pages/ProductUtil";
import OnKeyDownUtil from "@/utils/props/keydown/OnKeyDownUtil";
import useDetail from "@/utils/hooks/useDetail";
import ShowProductService from "service/product/ShowProductService";

export const useUpdate = () => {
  const { id_data, data, imageUrl } = useDetail(ShowProductService, "products");

  return { id_data, data, imageUrl };
};

const FormProduct = () => {
  const { id_data, data, imageUrl } = useUpdate();

  useEffect(() => {
    if (id_data && data) {
      handleChange({
        target: { name: "product_name", value: data.product_name || "" },
      });
      handleChange({
        target: { name: "quantity", value: data.quantity || "" },
      });
      handleChange({
        target: {
          name: "purchase_price",
          value:
            data.purchase_price !== undefined
              ? String(data.purchase_price)
              : "",
        },
      });
      handleChange({
        target: {
          name: "price",
          value: String(data.price),
        },
      });
    }
  }, [data, id_data]);

  const {
    product_name,
    quantity,
    displayPrice,
    displayPurchasePrice,
    image,
    error,

    handleChangeCategory,
    handleChangeUnit,
    handleChangeImage,
    handleDrop,
    handleFileReset,

    handleInvalid,
    handleChange,
    handleSubmit,
    handleSubmitUpdate,
  } = ProductUtil();

  const { handleNumberKey } = OnKeyDownUtil();

  return (
    <>
      <form
        method={data.length === 0 ? "POST" : "PUT"}
        onSubmit={data.length === 0 ? handleSubmit : handleSubmitUpdate}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <h6>Informasi Dasar</h6>
              <p>Bagian untuk mengonfigurasi informasi dasar</p>
            </div>

            <FormControl htmlFor="product_name" childrenLabel="Nama Barang">
              <Input
                type="text"
                name="product_name"
                value={product_name}
                onInvalid={handleInvalid}
                onChange={handleChange}
                autoFocus
                required
              />
            </FormControl>
            <FormControl htmlFor="quantity" childrenLabel="Jumlah">
              <Input
                type="number"
                name="quantity"
                value={quantity}
                onInvalid={handleInvalid}
                onChange={handleChange}
                required
              />
            </FormControl>

            <div className="mb-3 mt-8">
              <h6>Harga</h6>
              <p>Bagian untuk mengonfigurasi informasi penjualan</p>
            </div>
            <div className="gap-8 md:flex">
              <FormControl
                htmlFor="purchase_price"
                childrenLabel="Harga Beli"
                className="w-full"
              >
                <Input
                  type="text"
                  name="purchase_price"
                  value={displayPurchasePrice}
                  onInvalid={handleInvalid}
                  onChange={handleChange}
                  onKeyDown={handleNumberKey}
                  required
                />
              </FormControl>
              <FormControl
                htmlFor="price"
                childrenLabel="Harga Jual"
                className="w-full"
              >
                <Input
                  type="text"
                  name="price"
                  value={displayPrice}
                  onInvalid={handleInvalid}
                  onChange={handleChange}
                  onKeyDown={handleNumberKey}
                  required
                />
              </FormControl>
            </div>

            <div className="mb-3 mt-8">
              <h6>Organisasi</h6>
              <p>Bagian untuk mengonfigurasi atribut</p>
            </div>
            <div className="gap-8 md:flex">
              <FormControl childrenLabel="Kategori" className="w-full">
                <Select
                  name="category"
                  placeholder={
                    data ? data.category : "Buka menu pilihan ini..."
                  }
                  onChange={handleChangeCategory}
                >
                  <option value="Material Bangunan">Material Bangunan</option>
                  <option value="Alat Bangunan">Alat Bangunan</option>
                  <option value="Peralatan Listrik">Peralatan Listrik</option>
                  <option value="Pintu dan Jendela">Pintu dan Jendela</option>
                  <option value="Lantai dan Dinding">Lantai dan Dinding</option>
                  <option value="Atap dan Genteng">Atap dan Genteng</option>
                  <option value="Dekorasi">Dekorasi</option>
                </Select>
              </FormControl>
              <FormControl childrenLabel="Satuan" className="w-full">
                <Select
                  name="unit"
                  placeholder={data ? data.unit : "Buka menu pilihan ini..."}
                  onChange={handleChangeUnit}
                >
                  <option value="Sak">Sak</option>
                  <option value="Galon">Galon</option>
                  <option value="Buah">Buah</option>
                  <option value="Kardus">Kardus</option>
                  <option value="Lembar">Lembar</option>
                  <option value="Kaleng">Kaleng</option>
                  <option value="Batang">Batang</option>
                  <option value="Kilogram">Kilogram</option>
                  <option value="Meter">Meter</option>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-6">
              <h6>Gambar</h6>
              <p>Menambah atau mengubah gambar untuk produk</p>
            </div>

            <Upload
              draggable
              image={image}
              imageUrl={imageUrl}
              error={error}
              handleChangeImage={handleChangeImage}
              handleDrop={handleDrop}
              handleFileReset={handleFileReset}
            />
          </div>
        </div>

        <Button className="float-end mt-12 w-full md:w-1/4" children="Simpan" />

        <Toast />
      </form>
    </>
  );
};

export default FormProduct;
