import Card from "@/components/ui/display/Card";
import Avatar from "@/components/ui/display/Avatar";
import Icon from "@/components/ui/common/Icon";
import { MdOutlineEmail, MdPhone } from "react-icons/md";

const CustomerCard = () => {
  return (
    <>
      <Card>
        <h6>Pelanggan</h6>
        <div className="my-4 flex items-center gap-2">
          <Avatar shape="circle" />
          <p>-</p>
        </div>

        <div className="border-y border-gray-200 py-4 dark:border-zinc-700">
          <div className="flex items-center gap-2">
            <Icon name={MdOutlineEmail} />
            <p>-</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Icon name={MdPhone} />
            <p>-</p>
          </div>
        </div>

        <div className="pt-4">
          <h6>Alamat Pengiriman</h6>
          <p>-</p>
        </div>
      </Card>
    </>
  );
};

export default CustomerCard;
