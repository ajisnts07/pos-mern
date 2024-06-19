import Tag from "@/components/ui/display/Tag";
import OnlineStatusUtil from "@/utils/configs/display/OnlineStatusUtil";

const OnlineStatus = () => {
  const { statusType, statusText } = OnlineStatusUtil();

  return (
    <>
      <Tag
        type={statusType}
        className="hidden md:inline"
        children={statusText}
      />
    </>
  );
};

export default OnlineStatus;
