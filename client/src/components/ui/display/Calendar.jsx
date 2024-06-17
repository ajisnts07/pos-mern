import Icon from "../common/Icon";
import CalendarUtil from "@/utils/configs/display/CalendarUtil";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Calendar = () => {
  const { currentDate, generateCalendar, handlePrevMonth, handleNextMonth } =
    CalendarUtil();

  return (
    <>
      <div className="dark:zinc-900 rounded-xl bg-gray-50 p-4 dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <h5>
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </h5>

          <div className="flex">
            <button
              className="rounded-md p-1 hover:bg-gray-100 active:bg-gray-50 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
              onClick={handlePrevMonth}
            >
              <Icon name={FiChevronLeft} />
            </button>
            <button
              className="rounded-md p-1 hover:bg-gray-100 active:bg-gray-50 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
              onClick={handleNextMonth}
            >
              <Icon name={FiChevronRight} />
            </button>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-7 gap-1 py-1 text-center font-semibold text-gray-900 dark:text-gray-200">
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </div>

        <div className="mt-2 grid grid-cols-7 gap-1 text-center text-gray-600 dark:text-gray-400">
          {generateCalendar()}
        </div>
      </div>
    </>
  );
};

export default Calendar;
