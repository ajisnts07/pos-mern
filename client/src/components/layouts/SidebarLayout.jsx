import Drawer from "../ui/feedback/Drawer";
import SidebarBrand from "../fragments/navigation/sidebar/SidebarBrand";
import SystemItem from "../fragments/navigation/sidebar/SystemItem";
import FeatureItem from "../fragments/navigation/sidebar/FeatureItem";
import SettingItem from "../fragments/navigation/sidebar/SettingItem";

const SidebarLayout = ({ openDrawer, drawerRef, className }) => {
  return (
    <>
      <Drawer drawerRef={drawerRef} className={className}>
        <SidebarBrand openDrawer={openDrawer} />
        <SystemItem openDrawer={openDrawer} />
        <FeatureItem openDrawer={openDrawer} />
        <SettingItem openDrawer={openDrawer} />
      </Drawer>
    </>
  );
};

export default SidebarLayout;
