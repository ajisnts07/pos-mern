import Tag from "@/components/ui/display/Tag";
import DateUtil from "@/utils/configs/display/DateUtil";

const Date = () => {
  const { dateType, dateText } = DateUtil();

  return (
    <>
      <Tag type={dateType} className="hidden md:inline" children={dateText} />
    </>
  );
};

export default Date;
