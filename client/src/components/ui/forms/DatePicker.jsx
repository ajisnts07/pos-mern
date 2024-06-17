import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ className }) => {
  const storedDark = localStorage.getItem("dark") === "true";
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className={`input ${className}`}
        placeholderText={`\u{1F4C5} Pilih Tanggal`}
        popperClassName="date-picker-popper"
      />

      <style>{`
        .date-picker-popper .react-datepicker {
         background-color: ${storedDark ? "rgb(39 39 39)" : "rgb(249 250 251)"};
          border-color: ${storedDark ? "rgb(39 39 39)" : "rgb(249 250 251)"};
          padding: 4px;
          border-radius: 12px;
          width: 100%;
        }

       .date-picker-popper .react-datepicker__header {
        background-color: ${storedDark ? "rgb(39 39 39)" : "rgb(243 244 246)"};
        border-bottom: 0px;
        border-radius: 12px;
        }

        .date-picker-popper .react-datepicker__current-month {
          color: #ffffff;
        }


        .date-picker-popper .react-datepicker__day-name,
        .date-picker-popper .react-datepicker__day,
        .date-picker-popper .react-datepicker__time-name {
          color: ${storedDark ? "rgb(156 163 175)" : "rgb(75 85 99)"};
          border-radius: 100%;
        }

        .date-picker-popper .react-datepicker__day--today {
          background-color: ${storedDark ? "rgb(63 63 70)" : "rgb(229 231 235)"};
          color: ${storedDark ? "#ffffff" : "rgb(17 24 39)"};
          border-radius: 100%;
        }

        .date-picker-popper .react-datepicker__day--selected {
          background-color: rgb(253 186 116); 
          color: white;
        }
        
        .date-picker-popper .react-datepicker__day--selected:hover {
          background-color: rgb(253 186 116);
        }
      `}</style>
    </>
  );
};

export default DatePicker;
