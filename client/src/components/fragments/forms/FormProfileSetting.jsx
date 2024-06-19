import FormControl from "@/components/ui/forms/FormControl";
import Input from "@/components/ui/forms/Input";
import Upload from "@/components/ui/forms/Upload";
import TextArea from "@/components/ui/forms/TextArea";
import Button from "@/components/ui/common/Button";

const FormProfileSetting = () => {
  return (
    <>
      <form method="POST">
        <FormControl
          htmlFor="name"
          childrenLabel="Nama"
          className="items-center gap-40 md:flex"
        >
          <Input type="text" name="name" autoFocus required />
        </FormControl>
        <FormControl
          htmlFor="email"
          childrenLabel="Email"
          className="items-center gap-40 md:flex"
        >
          <Input type="email" name="email" required />
        </FormControl>
        <FormControl
          childrenLabel="Avatar"
          className="items-center gap-40 md:flex"
        >
          <Upload draggable />
        </FormControl>
        <FormControl
          htmlFor="address"
          childrenLabel="Alamat"
          className="items-center gap-40 md:flex"
        >
          <TextArea name="address" cols={10} rows={5} required />
        </FormControl>
        <FormControl
          htmlFor="phone_number"
          childrenLabel="Telepon"
          className="items-center gap-40 md:flex"
        >
          <Input
            type="tel"
            name="phone_number"
            minLength={12}
            maxLength={13}
            required
          />
        </FormControl>

        <Button className="float-end mt-12 w-full md:w-1/4" children="Simpan" />
      </form>
    </>
  );
};

export default FormProfileSetting;
