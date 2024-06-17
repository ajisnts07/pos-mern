import { Link } from "react-router-dom";
import Dropdown from "@/components/ui/navigation/Dropdown";
import Avatar from "@/components/ui/display/Avatar";
import Icon from "@/components/ui/common/Icon";
import DarkModeUtil from "@/utils/configs/display/DarkModeUtil";
import { FiList, FiLogOut, FiSun, FiMoon } from "react-icons/fi";

const Profile = () => {
  const { dark, handleChangeDarkMode } = DarkModeUtil();
  const isMobile = window.innerWidth < 768;

  return (
    <>
      <Dropdown
        dropdownName="profile"
        dropdownTitle={
          <>
            <div className="flex items-center gap-0 md:gap-2">
              <Avatar size={isMobile ? "md" : "sm"} />
              <div className="hidden pe-2 md:inline">
                <p>Name</p>
                <div className="extra-small">Role</div>
              </div>
            </div>
          </>
        }
      >
        <Link
          className="flex items-center gap-2 pb-2 md:hidden"
          onClick={handleChangeDarkMode}
        >
          <Icon name={dark ? FiSun : FiMoon} />
          <div className="small">{dark ? "Light" : "Dark"}</div>
        </Link>

        <Link className="flex items-center gap-2 pb-2" to="#">
          <Icon name={FiList} />
          <div className="small">Edit Profile</div>
        </Link>

        <Link className="flex items-center gap-2" to="#">
          <Icon name={FiLogOut} />
          <div className="small">Logout</div>
        </Link>
      </Dropdown>
    </>
  );
};

export default Profile;
