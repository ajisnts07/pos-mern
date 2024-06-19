import Button from "@/components/ui/common/Button";

const Cart = () => {
  return (
    <>
      <h3>Detail Pesanan #1</h3>
      <div className="my-4 flex gap-2">
        <Button type="button" size="md" children="Diambil" />
        <Button type="button" size="md" variant="tertiary" children="Dikirim" />
      </div>
      <div className="flex justify-between border-b border-gray-200 pb-1 dark:border-zinc-900">
        <h6>Item</h6>
        <h6>Jumlah</h6>
        <h6>Harga</h6>
      </div>

      <div className="fixed bottom-0 end-4 bg-white p-4 pe-0 dark:bg-zinc-950 md:end-8 md:p-4 md:pe-0">
        <div className="flex items-end justify-between gap-2 border-b border-gray-200 dark:border-zinc-900">
          <h6>Total</h6>
          <h4>Rp. 0</h4>
        </div>

        <div className="my-4 flex justify-end gap-2">
          <Button type="button" size="md" variant="tertiary" children="Cash" />
          <Button type="button" size="md" variant="tertiary" children="QRIS" />
          <Button
            type="button"
            size="md"
            variant="tertiary"
            children="Transfer"
          />
        </div>

        <Button className="w-full" children="Simpan" />
      </div>
    </>
  );
};

export default Cart;
