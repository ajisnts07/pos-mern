import Icon from "@/components/ui/common/Icon";
import DarkModeUtil from "@/utils/configs/display/DarkModeUtil";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleDarkMode = () => {
  const { dark, handleChangeDarkMode } = DarkModeUtil();

  return (
    <>
      <button
        type="button"
        className="hidden rounded-full bg-gray-50 p-[6.5px] hover:bg-gray-100 dark:bg-zinc-950 dark:ring-1 dark:ring-zinc-900 dark:hover:opacity-75 md:inline"
        onClick={handleChangeDarkMode}
      >
        {dark ? <Icon name={FiSun} /> : <Icon name={FiMoon} />}
      </button>
    </>
  );
};

export default ToggleDarkMode;
