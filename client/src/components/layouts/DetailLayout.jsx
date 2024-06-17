import Button from "@/components/ui/common/Button";
import Table from "@/components/ui/display/Table";
import Tag from "@/components/ui/display/Tag";
import ExpeditionCard from "@/components/fragments/display/sale/ExpeditionCard";
import PaymentCard from "@/components/fragments/display/sale/PaymentCard";
import CustomerCard from "@/components/fragments/display/sale/CustomerCard";
import { columns, initialData } from "@/pages/authentication/dataNumber";
import { FiPrinter } from "react-icons/fi";

const DetailLayout = () => {
  return (
    <>
      <div className="mb-12 items-end justify-between md:mb-4 md:flex">
        <div className="flex flex-col">
          <div className="flex items-center justify-start gap-2">
            <h3>Detail Penjualan #95954</h3>
            <Tag type="info" children="Lunas" />
            <Tag children="Cash" />
          </div>
          <p>Fri 15/03/2024, 09:00 PM</p>
        </div>

        <Button
          size="md"
          variant="tertiary"
          icon={FiPrinter}
          children="Cetak"
          className="float-end"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="w-full overflow-auto">
            <Table
              columns={columns}
              initialData={initialData}
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="col-span-1">
              <ExpeditionCard />
            </div>

            <div className="col-span-1">
              <PaymentCard />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <CustomerCard />
        </div>
      </div>
    </>
  );
};

export default DetailLayout;
