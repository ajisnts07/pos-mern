import FormControl from "@/components/ui/forms/FormControl";
import DatePicker from "@/components/ui/forms/DatePicker";
import Input from "@/components/ui/forms/Input";
import Select from "@/components/ui/forms/Select";
import TextArea from "@/components/ui/forms/TextArea";
import Button from "@/components/ui/common/Button";

const FormSale = () => {
  return (
    <>
      <form method="POS" onSubmit="#">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <h6>Informasi Dasar</h6>
              <p>Bagian untuk mengonfigurasi informasi dasar</p>
            </div>

            <FormControl childrenLabel="Tanggal">
              <DatePicker />
            </FormControl>
            <FormControl htmlFor="name" childrenLabel="Nama kasir">
              <Input type="text" name="name" required />
            </FormControl>
            <FormControl htmlFor="customer_name" childrenLabel="Nama Pelanggan">
              <Input type="text" name="customer_name" required />
            </FormControl>
            <div className="gap-8 md:flex">
              <FormControl childrenLabel="Pengiriman" className="w-full">
                <Select
                  name="expedition_type"
                  children="Buka menu pilihan ini..."
                >
                  <option value="Dikirim">Dikirim</option>
                  <option value="Diambil">Diambil</option>
                </Select>
              </FormControl>
              <FormControl childrenLabel="Status" className="w-full">
                <Select name="status" children="Buka menu pilihan ini...">
                  <option value="Lunas">Lunas</option>
                  <option value="Piutang">Piutang</option>
                </Select>
              </FormControl>
            </div>
            <FormControl htmlFor="information" childrenLabel="Keterangan">
              <TextArea name="information" />
            </FormControl>

            <div className="mb-3 mt-8">
              <h6>Pembayaran</h6>
              <p>Bagian untuk mengonfigurasi informasi pembayaran</p>
            </div>
            <FormControl htmlFor="sub_total" childrenLabel="Sub Total">
              <Input type="text" name="sub_total" required />
            </FormControl>
            <div className="gap-8 md:flex">
              <FormControl
                htmlFor="expedition_cost"
                childrenLabel="Biaya Kirim"
                className="w-full"
              >
                <Input type="text" name="expedition_cost" />
              </FormControl>
              <FormControl
                htmlFor="discount"
                childrenLabel="Diskon"
                className="w-full"
              >
                <Input type="text" name="discount" />
              </FormControl>
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
            <FormControl htmlFor="pay_amount" childrenLabel="Tunai">
              <Input type="text" name="pay_amount" required />
            </FormControl>
            <FormControl htmlFor="change" childrenLabel="Kembali">
              <Input type="text" name="change" required />
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
            <FormControl htmlFor="price" childrenLabel="Harga">
              <Input type="text" name="price" required />
            </FormControl>
          </div>
        </div>

        <Button className="float-end mt-12 w-full md:w-1/4" children="Simpan" />
      </form>
    </>
  );
};

export default FormSale;
