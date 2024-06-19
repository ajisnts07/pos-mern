const DateUtil = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString(`id-ID`, options);

  const sunday = currentDate.getDay() === 0;
  const dateType = sunday ? "danger" : "basic";
  const dateText = sunday ? "Libur" : date;

  return { dateType, dateText };
};

export default DateUtil;
