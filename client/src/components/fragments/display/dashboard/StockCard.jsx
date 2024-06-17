import { Link } from "react-router-dom";
import Card from "@/components/ui/display/Card";
import Dropdown from "@/components/ui/navigation/Dropdown";
import Icon from "@/components/ui/common/Icon";
import ChartComponent from "@/components/ui/graph/Chart";
import { CgMoreVerticalO } from "react-icons/cg";

const StockCard = ({ columns, initialData }) => {
  return (
    <>
      <div className="col-span-1 md:col-span-2">
        <Card>
          <div className="mb-4 flex items-center justify-between md:mb-0">
            <h4>Stok Barang</h4>

            <Dropdown
              dropdownName="more"
              dropdownTitle={<Icon name={CgMoreVerticalO} />}
              dropdownToggle={false}
            >
              <Link className="flex items-center gap-2 pb-2" to="#">
                <div className="small">Lihat Barang</div>
              </Link>
              <Link className="flex items-center gap-2" to="#">
                <div className="small">Tambah Barang</div>
              </Link>
            </Dropdown>
          </div>

          <ChartComponent
            type="bar"
            chartLabel="Jumlah Stok"
            columns={columns}
            initialData={initialData}
          />
        </Card>
      </div>
    </>
  );
};

export default StockCard;
