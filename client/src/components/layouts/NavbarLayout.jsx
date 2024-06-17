import ToggleSidebar from "../fragments/navigation/navbar/ToggleSidebar";
import Date from "../fragments/navigation/navbar/Date";
import TitlePage from "../fragments/navigation/navbar/TitlePage";
import OnlineStatus from "../fragments/navigation/navbar/OnlineStatus";
import ToggleFullScreen from "../fragments/navigation/navbar/ToggleFullScreen";
import ToggleDarkMode from "../fragments/navigation/navbar/ToggleDarkMode";
import Profile from "../fragments/navigation/navbar/Profile";

const NavbarLayout = ({ openDrawer, handleOpenDrawer }) => {
  return (
    <>
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <ToggleSidebar
            openDrawer={openDrawer}
            handleOpenDrawer={handleOpenDrawer}
          />
          <Date />
        </div>

        <TitlePage />

        <div className="flex items-center gap-2">
          <OnlineStatus />
          <ToggleFullScreen />
          <ToggleDarkMode />
          <Profile />
        </div>
      </nav>
    </>
  );
};

export default NavbarLayout;
