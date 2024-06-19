import Card from "@/components/ui/display/Card";
import Icon from "@/components/ui/common/Icon";
import { TbMoneybag } from "react-icons/tb";

const IncomeCard = () => {
  return (
    <>
      <div className="col-span-1">
        <Card>
          <div className="flex items-end justify-between">
            <div className="block">
              <div className="small mb-2 text-gray-900 dark:text-gray-200">
                Pendapatan
              </div>
              <h3>Rp. 530.000,00</h3>
              <div className="extra-small mt-1">Dalam 7 hari terakhir</div>
            </div>

            <Icon name={TbMoneybag} size={28} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default IncomeCard;
