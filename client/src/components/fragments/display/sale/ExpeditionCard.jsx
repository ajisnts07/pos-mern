import Card from "@/components/ui/display/Card";
import Icon from "@/components/ui/common/Icon";
import { LuGrab } from "react-icons/lu";

const ExpeditionCard = () => {
  return (
    <>
      <Card>
        <h6>Pengiriman</h6>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-indigo-950 p-4 dark:bg-orange-300">
              <Icon name={LuGrab} className="text-white dark:text-gray-900" />
            </div>
            <p>Diambil</p>
          </div>

          <p className="font-semibold">Rp. 0</p>
        </div>
      </Card>
    </>
  );
};

export default ExpeditionCard;
