import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeInput = ({ disabled }) => {
  const storedDark = localStorage.getItem("dark") === "true";
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <>
      <ReactDatePicker
        selected={selectedTime}
        onChange={(time) => setSelectedTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dateFormat="h:mm aa"
        className="input"
        placeholderText={`\u{1F551} Pilih Waktu`}
        popperClassName="date-picker-popper"
        disabled={disabled}
      />

      <style>{`
        .date-picker-popper .react-datepicker {
         background-color: ${storedDark ? "rgb(39 39 39)" : "rgb(249 250 251)"};
          border-color: ${storedDark ? "rgb(39 39 39)" : "rgb(249 250 251)"};
          padding: 4px;
          border-radius: 12px;
        }

        .date-picker-popper .react-datepicker__time-container {
            background-color: ${storedDark ? "rgb(39 39 39)" : "#ffffff"};
          }

           .date-picker-popper .react-datepicker__time-container .react-datepicker__time {
            background-color: ${storedDark ? "rgb(39 39 39)" : "#ffffff"};
          }
  
          .date-picker-popper .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
            background-color: ${storedDark ? "rgb(39 39 39)" : "#ffffff"};
          }
  
          .date-picker-popper .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
            background-color: ${storedDark ? "rgb(39 39 39)" : "#ffffff"};
          }
  
          .date-picker-popper .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
            color: ${storedDark ? "rgb(156 163 175)" : "rgb(75 85 99)"};
          }
  
          .date-picker-popper .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
            background-color:rgb(17 24 39); 
            color: white;
          }
  
          .date-picker-popper .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
            background-color: ${storedDark ? "rgb(63 63 70)" : "rgb(239 246 255)"};
          }

          .date-picker-popper .react-datepicker__time-container .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar {
            width: 0.4em;
          }
  
          .date-picker-popper .react-datepicker__time-container .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-track {
            background: transparent;
          }
  
          .date-picker-popper .react-datepicker__time-container .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-thumb {
            cursor: pointer;
            border-radius: 9999px;
            background-color: rgb(229 231 235);
          }
      `}</style>
    </>
  );
};

export default TimeInput;
