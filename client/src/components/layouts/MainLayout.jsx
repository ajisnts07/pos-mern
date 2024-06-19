import SidebarLayout from "./SidebarLayout";
import NavbarLayout from "./NavbarLayout";
import Button from "../ui/common/Button";
import DrawerUtil from "@/utils/configs/feedback/DrawerUtil";
import TitlePageUtil from "@/utils/configs/display/TitlePageUtil";

const MainLayout = ({ text, toButton, childrenButton, children }) => {
  const { openDrawer, drawerRef, handleOpenDrawer } = DrawerUtil();
  const { title } = TitlePageUtil();

  return (
    <>
      <div className="flex">
        <SidebarLayout
          openDrawer={openDrawer}
          drawerRef={drawerRef}
          className={
            openDrawer
              ? "absolute start-0 top-0 md:relative"
              : "hidden md:block md:w-20"
          }
        />

        <div className="container min-h-screen px-4 pb-4 dark:bg-zinc-950 md:px-8 md:pb-8">
          <NavbarLayout
            openDrawer={openDrawer}
            handleOpenDrawer={handleOpenDrawer}
          />

          {title !== "Dashboard User" &&
            title !== "Detail Penjualan" &&
            title !== "Detail Pembelian" && (
              <div className="mb-6 flex items-center justify-between md:mb-4">
                <div className="flex flex-col">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>

                {childrenButton && (
                  <Button
                    to={toButton}
                    className="float-end hidden items-center justify-center md:flex"
                    children={childrenButton}
                  />
                )}
              </div>
            )}

          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
