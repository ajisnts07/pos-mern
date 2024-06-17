import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import DatePicker from "@/components/ui/forms/DatePicker";
import TextArea from "@/components/ui/forms/TextArea";
import Select from "@/components/ui/forms/Select";
import Button from "@/components/ui/common/Button";

const FormReceivablePayment = () => {
  return (
    <>
      <form method="POST">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <h6>Informasi Dasar</h6>
              <p>Bagian untuk mengonfigurasi informasi dasar</p>
            </div>

            <FormControl htmlFor="_id_receivable" childrenLabel="No Piutang">
              <Input type="text" name="_id_receivable" autoFocus required />
            </FormControl>
            <FormControl htmlFor="customer_name" childrenLabel="Nama Pelanggan">
              <Input type="text" name="customer_name" />
            </FormControl>
            <FormControl childrenLabel="Tanggal Bayar">
              <DatePicker />
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

            <FormControl childrenLabel="Tipe Bayar">
              <Select name="pay_type" placeholder="Buka menu pilihan ini">
                <option value="Tunai">Tunai</option>
                <option value="QRIS">QRIS</option>
                <option value="Transfer">Transfer</option>
              </Select>
            </FormControl>
            <FormControl htmlFor="pay_amount" childrenLabel="Bayar">
              <Input type="text" name="pay_amount" required />
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

export default FormReceivablePayment;
