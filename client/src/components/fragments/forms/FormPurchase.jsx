import FormControl from "@/components/ui/forms/FormControl";
import DatePicker from "@/components/ui/forms/DatePicker";
import Input from "@/components/ui/forms/Input";
import TextArea from "@/components/ui/forms/TextArea";
import Select from "@/components/ui/forms/Select";
import Upload from "@/components/ui/forms/Upload";
import Button from "@/components/ui/common/Button";

const FormPurchase = () => {
  return (
    <>
      <form method="POST">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <h6>Informasi Dasar</h6>
              <p>Bagian untuk mengonfigurasi informasi dasar</p>
            </div>

            <div className="gap-8 md:flex">
              <FormControl childrenLabel="Tanggal Beli">
                <DatePicker />
              </FormControl>
              <FormControl childrenLabel="Tanggal Terima">
                <DatePicker />
              </FormControl>
            </div>

            <FormControl htmlFor="supplier_name" childrenLabel="Nama Supplier">
              <Input type="text" name="supplier_name" required />
            </FormControl>
            <FormControl htmlFor="information" childrenLabel="Keterangan">
              <TextArea name="information" />
            </FormControl>

            <div className="mb-3 mt-8">
              <h6>Pembayaran</h6>
              <p>Bagian untuk mengonfigurasi pembayaran</p>
            </div>
            <FormControl htmlFor="total" childrenLabel="Total">
              <Input type="text" name="total" required />
            </FormControl>
            <FormControl childrenLabel="Tipe Bayar">
              <Select name="pay_type" placeholder="Buka menu pilihan ini">
                <option value="Tunai">Tunai</option>
                <option value="QRIS">QRIS</option>
                <option value="Transfer">Transfer</option>
              </Select>
            </FormControl>
          </div>

          <div className="col-span-1">
            <div className="mb-3">
              <h6>Barang</h6>
              <p>Bagian untuk mengonfigurasi barang</p>
            </div>

            <FormControl htmlFor="product_name" childrenLabel="Nama Barang">
              <Input type="text" name="product_name" required />
            </FormControl>
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
            <FormControl htmlFor="quantity" childrenLabel="Jumlah">
              <Input type="number" name="quantity" required />
            </FormControl>
            <FormControl childrenLabel="Satuan" className="w-full">
              <Select name="unit" children="Buka menu pilihan ini...">
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
            <FormControl htmlFor="purchase_price" childrenLabel="Harga Beli">
              <Input type="text" name="purchase_price" required />
            </FormControl>
            <FormControl htmlFor="price" childrenLabel="Harga Jual">
              <Input type="text" name="price" required />
            </FormControl>
            <FormControl childrenLabel="Gambar">
              <Upload draggable />
            </FormControl>
          </div>
        </div>

        <Button type="submit" className="float-end mt-12 w-full md:w-1/4" children="Simpan" />
      </form>
    </>
  );
};

export default FormPurchase;
