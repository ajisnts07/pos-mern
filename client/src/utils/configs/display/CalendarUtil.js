import { useState } from "react";

const CalendarUtil = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const generateCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfLastMonth = new Date(year, month, 0).getDate();

    let days = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      days.push(
        <div
          key={`prev-${i}`}
          className="py-1 text-gray-400 dark:text-gray-600"
        >
          {lastDayOfLastMonth - i + 1}
        </div>,
      );
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday =
        today.getDate() === i &&
        today.getMonth() === month &&
        today.getFullYear() === year;

      days.push(
        <div
          key={i}
          className={`cursor-pointer rounded-full py-1 ${
            isToday
              ? "bg-orange-300 text-white hover:bg-orange-200"
              : "hover:bg-gray-100 dark:hover:bg-zinc-700"
          }`}
        >
          {i}
        </div>,
      );
    }

    const remainingDays = 42 - days.length;

    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <div
          key={`next-${i}`}
          className="py-1 text-gray-400 dark:text-gray-600"
        >
          {i}
        </div>,
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return { currentDate, generateCalendar, handlePrevMonth, handleNextMonth };
};

export default CalendarUtil;
