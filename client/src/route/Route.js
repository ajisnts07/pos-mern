import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// error
import NotFound from "@/pages/error/NotFound";
import AccessDenied from "@/pages/error/AccessDenied";
// authentication
import Login from "@/pages/authentication/Login";
import Register from "@/pages/authentication/Register";
import ForgotPassword from "@/pages/authentication/ForgotPassword";
import ResetPassword from "@/pages/authentication/ResetPassword";
// dashboard
import DashboardAdmin from "@/pages/dashboard/DashboardAdmin";
import DashboardUser from "@/pages/dashboard/DashboardUser";
// product
import ProductList from "@/pages/product/ProductList";
import ProductNew from "@/pages/product/ProductNew";
import ProductEdit from "@/pages/product/ProductEdit";
// sale
import SaleList from "@/pages/sale/SaleList";
import SaleDetail from "@/pages/sale/SaleDetail";
import SaleEdit from "@/pages/sale/SaleEdit";
import PaymentList from "@/pages/sale/PaymentList";
// purchase
import PurchaseList from "@/pages/purchase/PurchaseList";
import PurchaseNew from "@/pages/purchase/PurchaseNew";
import PurchaseEdit from "@/pages/purchase/PurchaseEdit";
import PurchaseDetail from "@/pages/purchase/PurchaseDetail";
// retur
import PurchaseReturnList from "@/pages/retur/PurchaseReturnList";
import PurchaseReturnNew from "@/pages/retur/PurchaseReturnNew";
import PurchaseReturnEdit from "@/pages/retur/PurchaseReturnEdit";
// supplier
import SupplierList from "@/pages/supplier/SupplierList";
import SupplierNew from "@/pages/supplier/SupplierNew";
import SupplierEdit from "@/pages/supplier/SupplierEdit";
// customer
import CustomerList from "@/pages/customer/CustomerList";
import CustomerNew from "@/pages/customer/CustomerNew";
import CustomerEdit from "@/pages/customer/CustomerEdit";
// receivable
import ReceivableList from "@/pages/receivable/ReceivableList";
import ReceivableNew from "@/pages/receivable/ReceivableNew";
import ReceivableEdit from "@/pages/receivable/ReceivableEdit";
import ReceivablePaymentList from "@/pages/receivable/ReceivablePaymentList";
import ReceivablePaymentNew from "@/pages/receivable/ReceivablePaymentNew";
import ReceivablePaymentEdit from "@/pages/receivable/ReceivablePaymentEdit";
// employee
import EmployeeList from "@/pages/employee/EmployeeList";
import EmployeeNew from "@/pages/employee/EmployeeNew";
import EmployeeEdit from "@/pages/employee/EmployeeEdit";
// report
import ReportList from "@/pages/report/ReportList";
// setting
import ProfileSetting from "@/pages/setting/ProfileSetting";
import PasswordSetting from "@/pages/setting/PasswordSetting";
import PaymentSetting from "@/pages/setting/PaymentSetting";

const RouterConfig = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const appName = process.env.REACT_APP_NAME;

    const titles = {
      // error
      "/access-denied": `Access Denied: Anda tidak memiliki izin untuk mengunjungi halaman ini`,
      // authentication
      "/": `Login | ${appName}`,
      "/auth/register": `Register | ${appName}`,
      "/auth/forgot-password": `Lupa kata sandi | ${appName}`,
      "/auth/reset-password": `Reset kata sandi | ${appName}`,
      // dashboard
      "/dashboard/admin": `Dashboard Admin | ${appName}`,
      "/dashboard": `Dashboard | ${appName}`,
      // product
      "/product": `Barang | ${appName}`,
      "/product-new": `Tambah Barang | ${appName}`,
      "/product-edit/:id": `Edit Barang | ${appName}`,
      // sale
      "/sale": `Penjualan | ${appName}`,
      "/sale-detail": `Detail Penjualan | ${appName}`,
      "/sale-edit": `Edit Penjualan | ${appName}`,
      "/payment": `Pembayaran | ${appName}`,
      // purchase
      "/purchase": `Pembelian | ${appName}`,
      "/purchase-new": `Tambah Pembelian | ${appName}`,
      "/purchase-detail": `Detail Pembelian | ${appName}`,
      "/purchase-edit": `Edit Pembelian | ${appName}`,
      // purchase return
      "/retur": `Retur | ${appName}`,
      "/retur-new": `Tambah Retur | ${appName}`,
      "/retur-edit": `Edit Retur | ${appName}`,
      // supplier
      "/supplier": `Supplier | ${appName}`,
      "/supplier-new": `Tambah Supplier | ${appName}`,
      "/supplier-edit": `Edit Supplier | ${appName}`,
      // customer
      "/customer": `Pelanggan | ${appName}`,
      "/customer-new": `Tambah Pelanggan | ${appName}`,
      "/customer-edit": `Edit Pelanggan | ${appName}`,
      // receivable
      "/receivable": `Piutang | ${appName}`,
      "/receivable-new": `Tambah Piutang | ${appName}`,
      "/receivable-edit": `Edit Piutang | ${appName}`,
      "/receivable-payment": `Pembayaran Piutang | ${appName}`,
      "/receivable-payment-new": `Tambah Pembayaran Piutang | ${appName}`,
      "/receivable-payment-edit": `Edit Pembayaran Piutang | ${appName}`,
      // employee
      "/employee": `Karyawan | ${appName}`,
      "/employee-new": `Tambah Karyawan | ${appName}`,
      "/employee-edit": `Edit Karyawan | ${appName}`,
      // report
      "/report": `Laporan | ${appName}`,
      // setting
      "/setting/profile": `Edit Profile | ${appName}`,
      "/setting/password": `Edit Password | ${appName}`,
      "/setting/payment": `Edit Pembayaran | ${appName}`,
    };

    if (path.startsWith("/product-edit/")) {
      document.title = `Edit Barang | ${appName}`;
    } else {
      document.title = titles[path] || "404: Halaman ini tidak ditemukan";
    }
  }, [location]);

  return (
    <Routes>
      {/* error */}
      <Route path="*" element={<NotFound />} />
      <Route path="/access-denied" element={<AccessDenied />} />
      {/* index */}
      <Route path="/" element={<Login />} />
      {/* authentication */}
      <Route path="/" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      {/* dashboard */}
      <Route path="/dashboard/admin" element={<DashboardAdmin />} />
      <Route path="/dashboard" element={<DashboardUser />} />
      {/* product */}
      <Route path="/product" element={<ProductList />} />
      <Route path="/product-new" element={<ProductNew />} />
      <Route path="/product-edit/:id" element={<ProductEdit />} />
      {/* sale */}
      <Route path="/sale" element={<SaleList />} />
      <Route path="/sale-detail" element={<SaleDetail />} />
      <Route path="/sale-edit" element={<SaleEdit />} />
      <Route path="/payment" element={<PaymentList />} />
      {/* purchase */}
      <Route path="/purchase" element={<PurchaseList />} />
      <Route path="/purchase-new" element={<PurchaseNew />} />
      <Route path="/purchase-detail" element={<PurchaseDetail />} />
      <Route path="/purchase-edit" element={<PurchaseEdit />} />
      {/* retur */}
      <Route path="/retur" element={<PurchaseReturnList />} />
      <Route path="/retur-new" element={<PurchaseReturnNew />} />
      <Route path="/retur-edit" element={<PurchaseReturnEdit />} />
      {/* supplier */}
      <Route path="/supplier" element={<SupplierList />} />
      <Route path="/supplier-new" element={<SupplierNew />} />
      <Route path="/supplier-edit" element={<SupplierEdit />} />
      {/* customer */}
      <Route path="/customer" element={<CustomerList />} />
      <Route path="/customer-new" element={<CustomerNew />} />
      <Route path="/customer-edit" element={<CustomerEdit />} />
      {/* receivable */}
      <Route path="/receivable" element={<ReceivableList />} />
      <Route path="/receivable-new" element={<ReceivableNew />} />
      <Route path="/receivable-edit" element={<ReceivableEdit />} />
      <Route path="/receivable-payment" element={<ReceivablePaymentList />} />
      <Route
        path="/receivable-payment-new"
        element={<ReceivablePaymentNew />}
      />
      <Route
        path="/receivable-payment-edit"
        element={<ReceivablePaymentEdit />}
      />
      {/* employee */}
      <Route path="/employee" element={<EmployeeList />} />
      <Route path="/employee-new" element={<EmployeeNew />} />
      <Route path="/employee-edit" element={<EmployeeEdit />} />
      {/* report */}
      <Route path="/report" element={<ReportList />} />
      {/* setting */}
      <Route path="/setting/profile" element={<ProfileSetting />} />
      <Route path="/setting/password" element={<PasswordSetting />} />
      <Route path="/setting/payment" element={<PaymentSetting />} />
    </Routes>
  );
};

export default RouterConfig;
