import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import TextArea from "@/components/ui/forms/TextArea";
import Button from "@/components/ui/common/Button";

const FormSupplier = () => {
  return (
    <>
      <form method="POST">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <h6>Informasi Dasar</h6>
              <p>Bagian untuk mengonfigurasi informasi dasar</p>
            </div>

            <FormControl htmlFor="supplier_name" childrenLabel="Nama Supplier">
              <Input type="text" name="supplier_name" autoFocus required />
            </FormControl>
            <FormControl htmlFor="address" childrenLabel="Alamat">
              <TextArea name="address" />
            </FormControl>
            <FormControl
              htmlFor="contact_person"
              childrenLabel="Penanggung Jawab"
            >
              <Input type="text" name="contact_person" required />
            </FormControl>
          </div>

          <div className="col-span-1">
            <div className="mb-3">
              <h6>Informasi Dasar</h6>
              <p>Bagian untuk mengonfigurasi informasi dasar</p>
            </div>

            <FormControl htmlFor="email" childrenLabel="Email">
              <Input type="email" name="email" required />
            </FormControl>
            <FormControl htmlFor="phone_number" childrenLabel="No Telepon">
              <Input type="tel" name="phone_number" required />
            </FormControl>
          </div>
        </div>

        <Button className="float-end mt-12 w-full md:w-1/4" children="Simpan" />
      </form>
    </>
  );
};

export default FormSupplier;
