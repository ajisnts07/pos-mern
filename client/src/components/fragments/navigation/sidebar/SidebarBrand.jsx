import Avatar from "@/components/ui/display/Avatar";
import LogoPrimary from "@/assets/img/logo-primary.png";

const SidebarBrand = ({ openDrawer }) => {
  return (
    <>
      <div
        className={`flex items-center gap-3 py-2 ${!openDrawer && "justify-center"}`}
      >
        <Avatar type="image" shape="rounded" image={LogoPrimary} />
        {openDrawer && (
          <div className="block">
            <h6>POS</h6>
            <div className="small">Karya Pembangunan</div>
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarBrand;
