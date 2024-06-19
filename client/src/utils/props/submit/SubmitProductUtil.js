import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import {
  closeNotifyLoading,
  notifyError,
  notifyLoading,
  notifySuccess,
} from "@/components/ui/feedback/Toast";
import StoreProductService from "service/product/StoreProductService";
import UpdateProductService from "service/product/UpdateProductService";

const SubmitProductUtil = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const { id } = useParams();

  const handleSubmit = async (
    e,
    product_name,
    category,
    quantity,
    unit,
    price,
    purchase_price,
    image,
  ) => {
    e.preventDefault();
    let loading;

    try {
      loading = notifyLoading();

      if (!token) {
        notifyError("Unauthorized, silahkan login ulang terlebih dahulu");

        setTimeout(() => {
          navigate("/");
        }, 5000);
      }

      const response = await StoreProductService(
        product_name,
        category,
        quantity,
        unit,
        price,
        purchase_price,
        image,
        token,
      );

      if (response && response.status === 201) {
        closeNotifyLoading(loading);

        notifySuccess("Data berhasil ditambahkan", () => {
          window.location.reload();
        });
      }
    } catch (error) {
      closeNotifyLoading(loading);

      notifyError(error.message);
    }
  };

  const handleSubmitUpdate = async (
    e,
    product_name,
    category,
    quantity,
    unit,
    price,
    purchase_price,
    image,
  ) => {
    e.preventDefault();
    let loading;

    try {
      loading = notifyLoading();

      if (!token) {
        notifyError("Unauthorized, silahkan login ulang terlebih dahulu");

        navigate("/");
      }

      const response = await UpdateProductService(
        id,
        product_name,
        category,
        quantity,
        unit,
        price,
        purchase_price,
        image,
        token,
      );

      if (response && response.status === 201) {
        closeNotifyLoading(loading);

        notifySuccess("Data berhasil diupdate", () => {
          window.location.reload();
        });
      }

      closeNotifyLoading(loading);
    } catch (error) {
      closeNotifyLoading(loading);

      notifyError(error.message);
    }
  };

  return { handleSubmit, handleSubmitUpdate };
};

export default SubmitProductUtil;
