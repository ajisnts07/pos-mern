import { Link } from "react-router-dom";
import Avatar from "@/components/ui/display/Avatar";
import LogoPrimary from "@/assets/img/logo-primary.png";

const Logo = ({ className }) => {
  return (
    <>
      <Link className="hidden w-fit md:block">
        <div className="flex items-center gap-3">
          <Avatar type="image" image={LogoPrimary} />
          <div className="block">
            <h6 className="text-white">POS</h6>
            <div className="small text-gray-400">Karya Pembangunan</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Logo;
