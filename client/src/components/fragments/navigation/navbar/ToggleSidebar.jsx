import Icon from "@/components/ui/common/Icon";
import { FiAlignLeft, FiMenu } from "react-icons/fi";

const ToggleSidebar = ({ openDrawer, handleOpenDrawer }) => {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-gray-50 p-[10px] hover:bg-gray-100 dark:bg-zinc-950 dark:ring-1 dark:ring-zinc-900 dark:hover:opacity-75 md:p-[6.5px]"
        onClick={handleOpenDrawer}
      >
        {openDrawer ? (
          <Icon name={FiAlignLeft} size={20} />
        ) : (
          <Icon name={FiMenu} size={20} />
        )}
      </button>
    </>
  );
};

export default ToggleSidebar;
