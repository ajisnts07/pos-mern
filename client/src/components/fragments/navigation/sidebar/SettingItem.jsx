import Menu, {
  MenuItem,
  MenuItemDropdown,
} from "@/components/ui/navigation/Menu";
import ActiveMenuUtil from "@/utils/configs/navigation/ActiveMenuUtil";
import { FiSettings, FiLogOut } from "react-icons/fi";

const SettingItem = ({ openDrawer }) => {
  const { active } = ActiveMenuUtil();

  return (
    <>
      {openDrawer && <div className="small py-2">PENGATURAN</div>}
      <Menu>
        <MenuItem
          openDrawer={openDrawer}
          icon={FiSettings}
          collapsable
          dropdownName="account"
          active={
            (active === "profile-setting") |
            (active === "password-setting") |
            (active === "payment-setting")
          }
          dropdownTitle="Akun"
        >
          <MenuItemDropdown
            to="/setting/profile"
            active={
              (active === "profile-setting") |
              (active === "password-setting") |
              (active === "payment-setting")
            }
            children="Pengaturan"
          />
        </MenuItem>

        <MenuItem openDrawer={openDrawer} icon={FiLogOut} children="Logout" />
      </Menu>
    </>
  );
};

export default SettingItem;
