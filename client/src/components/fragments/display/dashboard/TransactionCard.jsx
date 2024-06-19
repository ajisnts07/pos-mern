import Card from "@/components/ui/display/Card";
import Icon from "@/components/ui/common/Icon";
import { BsBagCheck } from "react-icons/bs";

const TransactionCard = () => {
  return (
    <>
      <div className="col-span-1">
        <Card>
          <div className="flex items-end justify-between">
            <div className="block">
              <div className="small mb-2 text-gray-900 dark:text-gray-200">
                Transaksi
              </div>
              <h3>30</h3>
              <div className="extra-small mt-1">Dalam hari ini</div>
            </div>

            <Icon name={BsBagCheck} size={28} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default TransactionCard;
