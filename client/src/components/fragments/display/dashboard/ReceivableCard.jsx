import { Link } from "react-router-dom";
import Card from "@/components/ui/display/Card";
import Dropdown from "@/components/ui/navigation/Dropdown";
import Icon from "@/components/ui/common/Icon";
import { CgMoreVerticalO } from "react-icons/cg";
import Table from "@/components/ui/display/Table";

const ReceivableCard = ({ columns, initialData }) => {
  return (
    <>
      <div className="col-span-1">
        <Card>
          <div className="mb-4 flex items-center justify-between md:mb-0">
            <h4>Piutang</h4>

            <Dropdown
              dropdownName="more"
              dropdownTitle={<Icon name={CgMoreVerticalO} />}
              dropdownToggle={false}
            >
              <Link className="flex items-center gap-2 pb-2" to="#">
                <div className="small">Lihat Piutang</div>
              </Link>
              <Link className="flex items-center gap-2" to="#">
                <div className="small">Tambah Piutang</div>
              </Link>
            </Dropdown>
          </div>

          <Table columns={columns} initialData={initialData} />
        </Card>
      </div>
    </>
  );
};

export default ReceivableCard;
