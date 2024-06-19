import Avatar from "@/components/ui/display/Avatar";
import { FiUser } from "react-icons/fi";

const Testimony = ({ testimonyText }) => {
  return (
    <>
      <div className="container">
        <div className="flex items-center gap-3">
          <Avatar type="icon" icon={FiUser} />
          <div className="block">
            <h6 className="text-white">Britanny Hale</h6>
            <div className="small text-gray-400">Pemilik</div>
          </div>
        </div>

        <h5 className="mt-3 text-gray-400 dark:text-gray-400">
          {testimonyText}
        </h5>
      </div>
    </>
  );
};

export default Testimony;
