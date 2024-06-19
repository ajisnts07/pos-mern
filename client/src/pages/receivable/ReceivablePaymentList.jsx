import MainLayout from "@/components/layouts/MainLayout";
import Table from "@/components/ui/display/Table";
import { columns, initialData } from "../authentication/data";

const ReceivablePaymentList = () => {
  return (
    <>
      <MainLayout
        text="Kelola pembayaran piutang Anda dengan mudah"
        toButton="/receivable-payment-new"
        childrenButton="Tambah Pemb Piutang"
      >
        <Table
          columns={columns}
          initialData={initialData}
          sorted
          printed
          searched
          totaled
          perPage
          paginated
        />
      </MainLayout>
    </>
  );
};

export default ReceivablePaymentList;
