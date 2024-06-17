import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import DatePicker from "@/components/ui/forms/DatePicker";
import Select from "@/components/ui/forms/Select";
import TextArea from "@/components/ui/forms/TextArea";
import Button from "@/components/ui/common/Button";

const FormReceivable = () => {
  return (
    <>
      <form method="POST">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <h6>Informasi Dasar</h6>
              <p>Bagian untuk mengonfigurasi informasi dasar</p>
            </div>

            <FormControl htmlFor="_id_sale" childrenLabel="No Penjualan">
              <Input type="text" name="_id_sale" autoFocus required />
            </FormControl>
            <FormControl htmlFor="customer_name" childrenLabel="Nama Pelanggan">
              <Input type="text" name="customer_name" required />
            </FormControl>
            <div className="gap-8 md:flex">
              <FormControl childrenLabel="Tanggal Piutang">
                <DatePicker />
              </FormControl>
              <FormControl childrenLabel="Jatuh Tempo">
                <DatePicker />
              </FormControl>
            </div>
            <FormControl childrenLabel="Status" className="w-full">
              <Select name="status" children="Buka menu pilihan ini...">
                <option value="Lunas">Lunas</option>
                <option value="Piutang">Piutang</option>
              </Select>
            </FormControl>
            <FormControl htmlFor="information" childrenLabel="Keterangan">
              <TextArea name="information" />
            </FormControl>
          </div>

          <div className="col-span-1">
            <div className="mb-3">
              <h6>Pembayaran</h6>
              <p>Bagian untuk mengonfigurasi pembayaran</p>
            </div>

            <FormControl htmlFor="total" childrenLabel="Total">
              <Input type="text" name="total" required />
            </FormControl>
            <FormControl htmlFor="total_payment" childrenLabel="Bayar">
              <Input type="text" name="total_payment" required />
            </FormControl>
            <FormControl htmlFor="remaining_payment" childrenLabel="Sisa Bayar">
              <Input type="text" name="remaining_payment" required />
            </FormControl>
          </div>
        </div>

        <Button
          type="submit"
          className="float-end mt-12 w-full md:w-1/4"
          children="Simpan"
        />
      </form>
    </>
  );
};

export default FormReceivable;
