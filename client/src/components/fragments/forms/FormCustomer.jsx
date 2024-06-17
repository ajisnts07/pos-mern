import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import TextArea from "@/components/ui/forms/TextArea";
import Select from "@/components/ui/forms/Select";
import Button from "@/components/ui/common/Button";

const FormCustomer = () => {
  return (
    <>
      <form method="POST">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <h6>Informasi Dasar</h6>
              <p>Bagian untuk mengonfigurasi informasi dasar</p>
            </div>

            <FormControl htmlFor="customer_name" childrenLabel="Nama Pelanggan">
              <Input type="text" name="customer_name" autoFocus required />
            </FormControl>
            <FormControl htmlFor="address" childrenLabel="Alamat">
              <TextArea name="address" required />
            </FormControl>
            <FormControl childrenLabel="Jenis Kelamin">
              <Select name="gender">
                <option value="Male">Laki-laki</option>
                <option value="Female">Perempuan</option>
              </Select>
            </FormControl>
          </div>

          <div className="col-span-1">
            <div className="mb-3">
              <h6>Informasi Kontak</h6>
              <p>Bagian untuk mengonfigurasi kontak</p>
            </div>

            <FormControl htmlFor="phone_number" childrenLabel="No Telepon">
              <Input type="tel" name="phone_number" autoFocus required />
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

export default FormCustomer;
