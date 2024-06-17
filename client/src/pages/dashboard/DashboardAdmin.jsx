import MainLayout from "@/components/layouts/MainLayout";
import IncomeCard from "@/components/fragments/display/dashboard/IncomeCard";
import TransactionCard from "@/components/fragments/display/dashboard/TransactionCard";
import TotalSaleCard from "@/components/fragments/display/dashboard/TotalSaleCard";
import StockCard from "@/components/fragments/display/dashboard/StockCard";
import TopSaleCard from "@/components/fragments/display/dashboard/TopSaleCard";
import LastSaleCard from "@/components/fragments/display/dashboard/LastSaleCard";
import ReceivableCard from "@/components/fragments/display/dashboard/ReceivableCard";
import { columns, initialData } from "../authentication/dataNumber";

const DashboardAdmin = () => {
  return (
    <>
      <MainLayout
        text="Lihat bagaimana data toko Anda hari ini"
        toButton="/product"
        childrenButton="Lihat Barang"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <IncomeCard />
          <TransactionCard />
          <TotalSaleCard />
          <StockCard columns={columns} initialData={initialData} />
          <TopSaleCard columns={columns} initialData={initialData} />
          <LastSaleCard columns={columns} initialData={initialData} />
          <ReceivableCard columns={columns} initialData={initialData} />
        </div>
      </MainLayout>
    </>
  );
};

export default DashboardAdmin;
