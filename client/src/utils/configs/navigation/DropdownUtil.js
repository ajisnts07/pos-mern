import { useState, useRef, useEffect } from "react";
import ActiveMenuUtil from "./ActiveMenuUtil";

const DropdownUtil = () => {
  const { active } = ActiveMenuUtil();

  const [openDropdown, setOpenDropdown] = useState({
    profile: active === "profile" ? true : false,
    product: (active === "product") | (active === "product-new") ? true : false,
    sale:
      (active === "sale") | (active === "sale-new") | (active === "payment")
        ? true
        : false,
    purchase:
      (active === "purchase") | (active === "purchase-new") ? true : false,
    purchaseReturn:
      (active === "retur") | (active === "retur-new") ? true : false,
    supplier:
      (active === "supplier") | (active === "supplier-new") ? true : false,
    customer:
      (active === "customer") | (active === "customer-new") ? true : false,
    receivable:
      (active === "receivable") |
      (active === "receivable-new") |
      (active === "receivable-payment") |
      (active === "receivable-payment-new")
        ? true
        : false,
    employee:
      (active === "employee") | (active === "employee-new") ? true : false,
    account:
      (active === "profile-setting") |
      (active === "password-setting") |
      (active === "payment-setting")
        ? true
        : false,
    more: false,
  });

  const dropdownRef = useRef({
    profile: null,
    product: null,
    sale: null,
    purchase: null,
    purchaseReturn: null,
    supplier: null,
    customer: null,
    receivable: null,
    employee: null,
    account: null,
    more: null,
  });

  const handleOpenDropdown = (dropdownName) => {
    setOpenDropdown((prevOpenDropdown) => ({
      ...prevOpenDropdown,
      [dropdownName]: !prevOpenDropdown[dropdownName],
    }));
  };

  const handleClickOutside = (e, dropdownName) => {
    Object.values(dropdownRef.current).forEach((ref) => {
      if (ref && !ref.contains(e.target)) {
        setOpenDropdown((prevOpenDropdown) => ({
          ...prevOpenDropdown,
          [dropdownName]: false,
        }));
      }
    });
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      handleClickOutside(e, "profile");
      handleClickOutside(e, "product");
      handleClickOutside(e, "sale");
      handleClickOutside(e, "purchase");
      handleClickOutside(e, "purchaseReturn");
      handleClickOutside(e, "supplier");
      handleClickOutside(e, "customer");
      handleClickOutside(e, "receivable");
      handleClickOutside(e, "employee");
      handleClickOutside(e, "account");
      handleClickOutside(e, "more");
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return { openDropdown, dropdownRef, handleOpenDropdown };
};

export default DropdownUtil;
