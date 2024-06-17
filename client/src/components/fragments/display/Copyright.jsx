import { MdCopyright } from "react-icons/md";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="extra-small mx-auto flex items-center gap-1 text-gray-400 md:mx-0">
        Copyright <MdCopyright /> {currentYear}. POS Karya Pembangunan
      </div>
    </>
  );
};

export default Copyright;
