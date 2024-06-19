import TitlePageUtil from "@/utils/configs/display/TitlePageUtil";

const TitlePage = () => {
  const { title } = TitlePageUtil();

  return (
    <>
      <p className="inline font-semibold md:hidden">{title}</p>
    </>
  );
};

export default TitlePage;
