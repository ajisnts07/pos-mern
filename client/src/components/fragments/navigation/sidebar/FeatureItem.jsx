import Menu, {
  MenuItem,
  MenuItemDropdown,
} from "@/components/ui/navigation/Menu";
import ActiveMenuUtil from "@/utils/configs/navigation/ActiveMenuUtil";
import TitlePageUtil from "@/utils/configs/display/TitlePageUtil";
import {
  FiArchive,
  FiShoppingCart,
  FiFolderPlus,
  FiCornerUpLeft,
  FiTruck,
  FiUser,
  FiCreditCard,
  FiUsers,
  FiFileText,
} from "react-icons/fi";

const FeatureItem = ({ openDrawer }) => {
  const { active } = ActiveMenuUtil();
  const { title } = TitlePageUtil();

  return (
    <>
      {openDrawer && <div className="small py-2">MENU</div>}
      {title === "DashboardUser" ? (
        <Menu>
          <MenuItem
            openDrawer={openDrawer}
            icon={FiArchive}
            collapsable
            dropdownName="product"
            dropdownTitle="Barang"
            active={(active === "product") | (active === "product-new")}
          >
            <MenuItemDropdown
              to="/product"
              active={active === "product"}
              children="Daftar Barang"
            />
            <MenuItemDropdown
              to="/product-new"
              active={active === "product-new"}
              children="Tambah Barang"
            />
          </MenuItem>

          <MenuItem
            openDrawer={openDrawer}
            icon={FiShoppingCart}
            collapsable
            dropdownName="sale"
            dropdownTitle="Penjualan"
            active={
              (active === "sale") |
              (active === "sale-new") |
              (active === "sale-detail") |
              (active === "sale-edit") |
              (active === "payment")
            }
          >
            <MenuItemDropdown
              to="/sale"
              active={active === "sale"}
              children="Daftar Penjualan"
            />
            <MenuItemDropdown
              to="/sale-new"
              active={active === "sale-new"}
              children="Tambah Penjualan"
            />
            <MenuItemDropdown
              to="/payment"
              active={active === "payment"}
              children="Daftar Pembayaran"
            />
          </MenuItem>

          <MenuItem
            openDrawer={openDrawer}
            icon={FiUser}
            collapsable
            dropdownName="customer"
            active={(active === "customer") | (active === "customer-new")}
            dropdownTitle="Pelanggan"
          >
            <MenuItemDropdown
              to="#"
              active={active === "customer"}
              children="Daftar Pelanggan"
            />
            <MenuItemDropdown
              to="#"
              active={active === "customer-new"}
              children="Tambah Pelanggan"
            />
          </MenuItem>

          <MenuItem
            openDrawer={openDrawer}
            icon={FiCreditCard}
            collapsable
            dropdownName="receivable"
            active={
              (active === "receivable") |
              (active === "receivable-new") |
              (active === "paymentReceivable") |
              (active === "receivablePayment-new")
            }
            dropdownTitle="Piutang"
          >
            <MenuItemDropdown
              to="#"
              active={active === "receivable"}
              children="Daftar Piutang"
            />
            <MenuItemDropdown
              to="#"
              active={active === "receivable-new"}
              children="Tambah Piutang"
            />
            <MenuItemDropdown
              to="#"
              active={active === "receivablePayment"}
              children="Daftar Pemb Piutang"
            />
            <MenuItemDropdown
              to="#"
              active={active === "receivablePayment-new"}
              children="Tambah Pemb Piutang"
            />
          </MenuItem>
        </Menu>
      ) : (
        <Menu>
          <MenuItem
            openDrawer={openDrawer}
            icon={FiArchive}
            collapsable
            dropdownName="product"
            dropdownTitle="Barang"
            active={
              (active === "product") |
              (active === "product-new") |
              (active === "product-edit")
            }
          >
            <MenuItemDropdown
              to="/product"
              active={active === "product"}
              children="Daftar Barang"
            />
            <MenuItemDropdown
              to="/product-new"
              active={active === "product-new"}
              children="Tambah Barang"
            />
          </MenuItem>

          <MenuItem
            openDrawer={openDrawer}
            icon={FiShoppingCart}
            collapsable
            dropdownName="sale"
            dropdownTitle="Penjualan"
            active={
              (active === "sale") |
              (active === "sale-new") |
              (active === "sale-detail") |
              (active === "sale-edit") |
              (active === "payment")
            }
          >
            <MenuItemDropdown
              to="/sale"
              active={active === "sale"}
              children="Daftar Penjualan"
            />
            <MenuItemDropdown
              to="/sale-new"
              active={active === "sale-new"}
              children="Tambah Penjualan"
            />
            <MenuItemDropdown
              to="/payment"
              active={active === "payment"}
              children="Daftar Pembayaran"
            />
          </MenuItem>

          <MenuItem
            openDrawer={openDrawer}
            icon={FiFolderPlus}
            collapsable
            dropdownName="purchase"
            active={
              (active === "purchase") |
              (active === "purchase-new") |
              (active === "purchase-edit") |
              (active === "purchase-detail")
            }
            dropdownTitle="Pembelian"
          >
            <MenuItemDropdown
              to="/purchase"
              active={active === "purchase"}
              children="Daftar Pembelian"
            />
            <MenuItemDropdown
              to="/purchase-new"
              active={active === "purchase-new"}
              children="Tambah Pembelian"
            />
          </MenuItem>

          <MenuItem
            openDrawer={openDrawer}
            icon={FiCornerUpLeft}
            collapsable
            dropdownName="purchaseReturn"
            active={
              (active === "retur") |
              (active === "retur-new") |
              (active === "retur-edit")
            }
            dropdownTitle="Retur"
          >
            <MenuItemDropdown
              to="/retur"
              active={active === "retur"}
              children="Daftar Retur"
            />
            <MenuItemDropdown
              to="/retur-new"
              active={active === "retur-new"}
              children="Tambah Retur"
            />
          </MenuItem>

          <MenuItem
            openDrawer={openDrawer}
            icon={FiTruck}
            collapsable
            dropdownName="supplier"
            active={
              (active === "supplier") |
              (active === "supplier-new") |
              (active === "supplier-edit")
            }
            dropdownTitle="Supplier"
          >
            <MenuItemDropdown
              to="/supplier"
              active={active === "supplier"}
              children="Daftar Supplier"
            />
            <MenuItemDropdown
              to="/supplier-new"
              active={active === "supplier-new"}
              children="Tambah Supplier"
            />
          </MenuItem>

          <MenuItem
            openDrawer={openDrawer}
            icon={FiUser}
            collapsable
            dropdownName="customer"
            active={
              (active === "customer") |
              (active === "customer-new") |
              (active === "customer-edit")
            }
            dropdownTitle="Pelanggan"
          >
            <MenuItemDropdown
              to="/customer"
              active={active === "customer"}
              children="Daftar Pelanggan"
            />
            <MenuItemDropdown
              to="/customer-new"
              active={active === "customer-new"}
              children="Tambah Pelanggan"
            />
          </MenuItem>

          <MenuItem
            openDrawer={openDrawer}
            icon={FiCreditCard}
            collapsable
            dropdownName="receivable"
            active={
              (active === "receivable") |
              (active === "receivable-new") |
              (active === "receivable-edit") |
              (active === "receivable-payment") |
              (active === "receivable-payment-new") |
              (active === "receivable-payment-edit")
            }
            dropdownTitle="Piutang"
          >
            <MenuItemDropdown
              to="/receivable"
              active={active === "receivable"}
              children="Daftar Piutang"
            />
            <MenuItemDropdown
              to="/receivable-new"
              active={active === "receivable-new"}
              children="Tambah Piutang"
            />
            <MenuItemDropdown
              to="/receivable-payment"
              active={active === "receivable-payment"}
              children="Daftar Pemb Piutang"
            />
            <MenuItemDropdown
              to="/receivable-payment-new"
              active={active === "receivable-payment-new"}
              children="Tambah Pemb Piutang"
            />
          </MenuItem>

          <MenuItem
            openDrawer={openDrawer}
            icon={FiUsers}
            collapsable
            dropdownName="employee"
            active={
              (active === "employee") |
              (active === "employee-new") |
              (active === "employee-edit")
            }
            dropdownTitle="Karyawan"
          >
            <MenuItemDropdown
              to="/employee"
              active={active === "employee"}
              children="Daftar Karyawan"
            />
            <MenuItemDropdown
              to="/employee-new"
              active={active === "employee-new"}
              children="Tambah Karyawan"
            />
          </MenuItem>

          <MenuItem
            openDrawer={openDrawer}
            to="/report"
            icon={FiFileText}
            active={active === "report"}
            children="Laporan"
          />
        </Menu>
      )}
    </>
  );
};

export default FeatureItem;
