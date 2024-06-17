import Icon from "@/components/ui/common/Icon";
import FullScreenUtil from "@/utils/configs/display/FullScreenUtil";
import { FiMaximize2, FiMaximize } from "react-icons/fi";

const ToggleFullScreen = () => {
  const { fullScreen, handleChangeFullScreen } = FullScreenUtil();

  return (
    <>
      <button
        type="button"
        className="hidden rounded-full bg-gray-50 p-[6.5px] hover:bg-gray-100 dark:bg-zinc-950 dark:ring-1 dark:ring-zinc-900 dark:hover:opacity-75 md:inline"
        onClick={handleChangeFullScreen}
      >
        {fullScreen ? <Icon name={FiMaximize2} /> : <Icon name={FiMaximize} />}
      </button>
    </>
  );
};

export default ToggleFullScreen;
