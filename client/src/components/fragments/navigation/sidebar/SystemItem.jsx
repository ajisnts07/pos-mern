import Menu, { MenuItem } from "@/components/ui/navigation/Menu";
import ActiveMenuUtil from "@/utils/configs/navigation/ActiveMenuUtil";
import { FiHome } from "react-icons/fi";

const SystemItem = ({ openDrawer }) => {
  const { active } = ActiveMenuUtil();

  return (
    <>
      {openDrawer && <div className="small py-2">SISTEM</div>}
      <Menu>
        <MenuItem
          openDrawer={openDrawer}
          icon={FiHome}
          children="Dashboard"
          active={(active === "dashboardAdmin") | (active === "dashboard")}
          to="/dashboard/admin"
        />
      </Menu>
    </>
  );
};

export default SystemItem;
