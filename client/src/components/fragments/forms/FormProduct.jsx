import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import Select from "@/components/ui/forms/Select";
import Upload from "@/components/ui/forms/Upload";
import Button from "@/components/ui/common/Button";

const FormProduct = () => {
  return (
    <>
      <form method="POST">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <h6>Informasi Dasar</h6>
              <p>Bagian untuk mengonfigurasi informasi dasar</p>
            </div>
            
            <FormControl htmlFor="product_name" childrenLabel="Nama Barang">
              <Input type="text" name="product_name" autoFocus required />
            </FormControl>
            <FormControl htmlFor="quantity" childrenLabel="Jumlah">
              <Input type="number" name="quantity" required />
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
                <Input type="text" name="purchase_price" required />
              </FormControl>
              <FormControl
                htmlFor="price"
                childrenLabel="Harga Jual"
                className="w-full"
              >
                <Input type="text" name="price" required />
              </FormControl>
            </div>

            <div className="mb-3 mt-8">
              <h6>Organisasi</h6>
              <p>Bagian untuk mengonfigurasi atribut</p>
            </div>
            <div className="gap-8 md:flex">
              <FormControl childrenLabel="Kategori" className="w-full">
                <Select name="category" placeholder="Buka menu pilihan ini...">
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
                <Select name="unit" placeholder="Buka menu pilihan ini...">
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

            <Upload draggable />
          </div>
        </div>

        <Button className="float-end mt-12 w-full md:w-1/4" children="Simpan" />
      </form>
    </>
  );
};

export default FormProduct;
