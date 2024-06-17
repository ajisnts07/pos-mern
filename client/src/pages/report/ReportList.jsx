import MainLayout from "@/components/layouts/MainLayout";
import Card from "@/components/ui/display/Card";
import Button from "@/components/ui/common/Button";
import { FiPrinter } from "react-icons/fi";

const ReportList = () => {
  return (
    <>
      <MainLayout text="Kelola laporan Anda dengan mudah">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          <Card>
            <h6>Barang</h6>
            <Button
              type="button"
              size="md"
              variant="tertiary"
              className="float-end mt-2 md:mt-0"
              icon={FiPrinter}
              children="Cetak"
            />
          </Card>

          <Card>
            <h6>Penjualan</h6>
            <Button
              type="button"
              size="md"
              variant="tertiary"
              className="float-end mt-2 md:mt-0"
              icon={FiPrinter}
              children="Cetak"
            />
          </Card>

          <Card>
            <h6>Pembelian</h6>
            <Button
              type="button"
              size="md"
              variant="tertiary"
              className="float-end mt-2 md:mt-0"
              icon={FiPrinter}
              children="Cetak"
            />
          </Card>

          <Card>
            <h6>Retur</h6>
            <Button
              type="button"
              size="md"
              variant="tertiary"
              className="float-end mt-2 md:mt-0"
              icon={FiPrinter}
              children="Cetak"
            />
          </Card>

          <Card>
            <h6>Supplier</h6>
            <Button
              type="button"
              size="md"
              variant="tertiary"
              className="float-end mt-2 md:mt-0"
              icon={FiPrinter}
              children="Cetak"
            />
          </Card>

          <Card>
            <h6>Pelanggan</h6>
            <Button
              type="button"
              size="md"
              variant="tertiary"
              className="float-end mt-2 md:mt-0"
              icon={FiPrinter}
              children="Cetak"
            />
          </Card>

          <Card>
            <h6>Piutang</h6>
            <Button
              type="button"
              size="md"
              variant="tertiary"
              className="float-end mt-2 md:mt-0"
              icon={FiPrinter}
              children="Cetak"
            />
          </Card>

          <Card>
            <h6>Pembayaran Piutang</h6>
            <Button
              type="button"
              size="md"
              variant="tertiary"
              className="float-end mt-2 md:mt-0"
              icon={FiPrinter}
              children="Cetak"
            />
          </Card>

          <Card>
            <h6>Karyawan</h6>
            <Button
              type="button"
              size="md"
              variant="tertiary"
              className="float-end mt-2 md:mt-0"
              icon={FiPrinter}
              children="Cetak"
            />
          </Card>
        </div>
      </MainLayout>
    </>
  );
};

export default ReportList;
