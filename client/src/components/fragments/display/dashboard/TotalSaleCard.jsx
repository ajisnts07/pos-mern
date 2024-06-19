import Card from "@/components/ui/display/Card";
import Icon from "@/components/ui/common/Icon";
import { PiMoney } from "react-icons/pi";

const TotalSaleCard = () => {
  return (
    <>
      <div className="col-span-1">
        <Card>
          <div className="flex items-end justify-between">
            <div className="block">
              <div className="small mb-2 text-gray-900 dark:text-gray-200">
                Jumlah Total Penjualan
              </div>
              <h3>Rp. 1.138.000,00</h3>
              <div className="extra-small mt-1">Dalam hari ini</div>
            </div>

            <Icon name={PiMoney} size={28} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default TotalSaleCard;
