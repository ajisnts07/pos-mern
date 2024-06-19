import { Link } from "react-router-dom";
import Card from "@/components/ui/display/Card";
import Dropdown from "@/components/ui/navigation/Dropdown";
import Icon from "@/components/ui/common/Icon";
import { CgMoreVerticalO } from "react-icons/cg";
import ChartComponent from "@/components/ui/graph/Chart";

const TopSaleCard = ({ columns, initialData }) => {
  return (
    <>
      <div className="col-span-1">
        <Card>
          <div className="mb-4 flex items-center justify-between md:mb-[23px]">
            <h4>Top Penjualan</h4>

            <Dropdown
              dropdownName="more"
              dropdownTitle={<Icon name={CgMoreVerticalO} />}
              dropdownToggle={false}
            >
              <Link className="flex items-center gap-2 pb-2" to="#">
                <div className="small">Lihat Penjualan</div>
              </Link>
              <Link className="flex items-center gap-2" to="#">
                <div className="small">Tambah Penjualan</div>
              </Link>
            </Dropdown>
          </div>

          <ChartComponent
            type="doughnut"
            chartLabel="Jumlah"
            columns={columns}
            initialData={initialData}
          />
        </Card>
      </div>
    </>
  );
};

export default TopSaleCard;
