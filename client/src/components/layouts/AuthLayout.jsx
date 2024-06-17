import Logo from "../fragments/display/Logo";
import Testimony from "../fragments/display/Testimony";
import Copyright from "../fragments/display/Copyright";
import DarkModeUtil from "@/utils/configs/display/DarkModeUtil";
import { FiSun, FiMoon } from "react-icons/fi";

const AuthLayout = ({ title, text, testimonyText, children }) => {
  const { dark, handleChangeDarkMode } = DarkModeUtil();

  return (
    <>
      <div className="grid min-h-screen grid-cols-1 bg-indigo-950 dark:bg-zinc-950 md:grid-cols-3">
        <div className="top-0 col-span-1 flex flex-col justify-between gap-8 p-8 md:sticky md:order-1 md:h-screen md:gap-0">
          <Logo />
          <Testimony testimonyText={testimonyText} />
          <Copyright />
        </div>

        <div className="order-first col-span-2 min-h-screen bg-indigo-950 p-0 dark:bg-zinc-950 md:order-2 md:px-4 md:py-8">
          <div
            className={`flex h-full items-center justify-center bg-white dark:bg-zinc-900 md:rounded-3xl ${title === "Register" && "md:p-8"}`}
          >
            <div
              className={`p-4 md:p-0 ${title === "Register" ? "w-full py-8" : "md:w-2/5"}`}
            >
              <h3>{title}</h3>
              <p className="mb-12 mt-1">{text}</p>

              {children}
            </div>
          </div>

          <div className="absolute end-0 top-24 rounded-s-xl bg-orange-300 md:top-1/2">
            <button className="p-2" onClick={handleChangeDarkMode}>
              {dark ? (
                <FiSun className="text-indigo-950" size={16} />
              ) : (
                <FiMoon className="text-indigo-950" size={16} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
