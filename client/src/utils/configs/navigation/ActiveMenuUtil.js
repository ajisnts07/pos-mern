import { useLocation } from "react-router-dom";

const ActiveMenuUtil = () => {
  const location = useLocation();
  const path = location.pathname;

  const actives = {
    // dashboard
    "/dashboard/admin": "dashboardAdmin",
    "/dashboard": "dashboard",
    // product
    "/product": "product",
    "/product-new": "product-new",
    "/product-edit": "product-edit",
    // sale
    "/sale": "sale",
    "/sale-new": "sale-new",
    "/sale-edit": "sale-edit",
    "/sale-detail": "sale-detail",
    "/payment": "payment",
    // purchase
    "/purchase": "purchase",
    "/purchase-new": "purchase-new",
    "/purchase-edit": "purchase-edit",
    "/purchase-detail": "purchase-detail",
    // retur
    "/retur": "retur",
    "/retur-new": "retur-new",
    "/retur-edit": "retur-edit",
    // supplier
    "/supplier": "supplier",
    "/supplier-new": "supplier-new",
    "/supplier-edit": "supplier-edit",
    // customer
    "/customer": "customer",
    "/customer-new": "customer-new",
    "/customer-edit": "customer-edit",
    // receivable
    "/receivable": "receivable",
    "/receivable-new": "receivable-new",
    "/receivable-edit": "receivable-edit",
    "/receivable-payment": "receivable-payment",
    "/receivable-payment-new": "receivable-payment-new",
    "/receivable-payment-edit": "receivable-payment-edit",
    // employee
    "/employee": "employee",
    "/employee-new": "employee-new",
    "/employee-edit": "employee-edit",
    // report
    "/report": "report",
    // setting
    "/setting/profile": "profile-setting",
    "/setting/password": "password-setting",
    "/setting/payment": "payment-setting",
  };

  const active = actives[path];

  return { active };
};

export default ActiveMenuUtil;
