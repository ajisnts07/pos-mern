import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitlePageUtil = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const titles = {
      // dashboard
      "/dashboard/admin": "Dashboard",
      "/dashboard": "Dashboard User",
      // product
      "/product": "Barang",
      "/product-new": "Tambah Barang",
      "/product-edit": "Edit Barang",
      // sale
      "/sale": "Penjualan",
      "/sale-detail": "Detail Penjualan",
      "/sale-edit": "Edit Penjualan",
      "/payment": "Pembayaran",
      // purchase
      "/purchase": "Pembelian",
      "/purchase-new": "Tambah Pembelian",
      "/purchase-edit": "Edit Pembelian",
      "/purchase-detail": "Detail Pembelian",
      // retur
      "/retur": "Retur",
      "/retur-new": "Tambah Retur",
      "/retur-edit": "Edit Retur",
      // supplier
      "/supplier": "Supplier",
      "/supplier-new": "Tambah Supplier",
      "/supplier-edit": "Edit Supplier",
      // customer
      "/customer": "Pelanggan",
      "/customer-new": "Tambah Pelanggan",
      "/customer-edit": "Edit Pelanggan",
      // receivable
      "/receivable": "Piutang",
      "/receivable-new": "Tambah Piutang",
      "/receivable-edit": "Edit Piutang",
      "/receivable-payment": "Pemb Piutang",
      "/receivable-payment-new": "Tambah Pemb Piutang",
      "/receivable-payment-edit": "Edit Pemb Piutang",
      // employee
      "/employee": "Karyawan",
      "/employee-new": "Tambah Karyawan",
      "/employee-edit": "Edit Karyawan",
      // report
      "/report": "Laporan",
      // setting
      "/setting/profile": "Pengaturan",
      "/setting/password": "Pengaturan",
      "/setting/payment": "Pengaturan",
    };

    if (titles[path]) {
      setTitle(titles[path]);
    } else {
      setTitle("");
    }
  }, [location]);

  return { title };
};

export default TitlePageUtil;
