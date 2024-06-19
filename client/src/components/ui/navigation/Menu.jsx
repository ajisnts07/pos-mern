import { Link } from "react-router-dom";
import DropdownUtil from "@/utils/configs/navigation/DropdownUtil";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Menu = ({ children }) => {
  return <>{children}</>;
};

export const MenuItem = ({
  collapsable,
  dropdownName,
  dropdownTitle,
  icon: Icon,
  to,
  active,
  openDrawer,
  children,
}) => {
  const { openDropdown, dropdownRef, handleOpenDropdown } = DropdownUtil();

  return (
    <>
      {collapsable ? (
        <div
          className="relative"
          ref={(node) => (dropdownRef.current[dropdownName] = node)}
        >
          <div
            className="flex w-full cursor-pointer items-center justify-between gap-2 py-2"
            onClick={() => handleOpenDropdown(dropdownName)}
          >
            <div
              className={`flex items-center gap-3 ${!openDrawer && "w-full justify-center"}`}
            >
              <Icon
                size={20}
                className={
                  active
                    ? "text-indigo-950 dark:text-orange-300"
                    : "text-gray-600 dark:text-gray-400"
                }
              />
              {openDrawer && (
                <div
                  className={`small font-medium capitalize ${active && "text-indigo-950 dark:text-orange-300"}`}
                >
                  {dropdownTitle}
                </div>
              )}
            </div>

            {openDrawer &&
              (openDropdown[dropdownName] ? (
                <FiChevronUp
                  size={12}
                  className="text-gray-900 dark:text-gray-200"
                />
              ) : (
                <FiChevronDown
                  size={12}
                  className="text-gray-900 dark:text-gray-200"
                />
              ))}
          </div>

          {openDropdown[dropdownName] && (
            <div
              className={`mb-[7px] flex w-max flex-col rounded-xl bg-gray-50 pe-5 dark:bg-zinc-900 ${!openDrawer && "shadow-sm"}`}
            >
              {children}
            </div>
          )}
        </div>
      ) : (
        <Link
          className={`flex cursor-pointer items-center gap-3 py-2 ${openDrawer ? "w-fit" : "w-full justify-center"}`}
          to={to}
        >
          <Icon
            size={20}
            className={
              active
                ? "text-indigo-950 dark:text-orange-300"
                : "text-gray-600 dark:text-gray-400"
            }
          />
          {openDrawer && (
            <div
              className={`small font-medium ${active && "text-indigo-950 dark:text-orange-300"}`}
            >
              {children}
            </div>
          )}
        </Link>
      )}
    </>
  );
};

export const MenuItemDropdown = ({ to, active, children }) => {
  return (
    <>
      <Link
        to={to}
        className={`small z-auto cursor-pointer py-2 ps-5 font-medium capitalize ${active ? "text-indigo-950 dark:text-orange-300" : "text-gray-600 dark:text-gray-400"}`}
      >
        {children}
      </Link>
    </>
  );
};

export default Menu;
