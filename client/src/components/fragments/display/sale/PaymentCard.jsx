import Card from "@/components/ui/display/Card";

const PaymentCard = () => {
  return (
    <>
      <Card>
        <h6>Pembayaran</h6>

        <div className="mt-4 flex flex-col gap-2">
          <div className="flex justify-between">
            <p>Sub Total</p>
            <p className="font-semibold">Rp. 80.000</p>
          </div>

          <div className="flex justify-between">
            <p>Biaya Kirim</p>
            <p className="font-semibold">Rp. 0</p>
          </div>

          <div className="flex justify-between">
            <p>Diskon</p>
            <p className="font-semibold">-</p>
          </div>

          <div className="flex justify-between">
            <p>Total</p>
            <p className="font-semibold">Rp. 80.000</p>
          </div>

          <div className="flex justify-between">
            <p>Jumlah Bayar</p>
            <p className="font-semibold">Rp. 100.000</p>
          </div>

          <div className="flex justify-between">
            <p>Kembali</p>
            <p className="font-semibold">Rp. 20.000</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PaymentCard;
