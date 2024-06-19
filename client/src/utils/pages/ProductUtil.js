import { OnInvalidUtil } from "../props/invalid/OnInvalidUtil";
import useSelect from "../hooks/useSelect";
import useImage from "../hooks/useImage";
import OnChangeUtil from "../props/change/OnChangeUtil";
import SubmitProductUtil from "../props/submit/SubmitProductUtil";

const ProductUtil = () => {
  const { category, unit, handleChangeCategory, handleChangeUnit } =
    useSelect();

  const { image, error, handleChangeImage, handleDrop, handleFileReset } =
    useImage();

  const {
    product_name,
    quantity,
    purchase_price,
    displayPurchasePrice,
    price,
    displayPrice,
    handleChange,
  } = OnChangeUtil();

  const { handleSubmit, handleSubmitUpdate } = SubmitProductUtil();

  return {
    product_name,
    category,
    quantity,
    unit,
    purchase_price,
    displayPurchasePrice,
    price,
    displayPrice,
    image,
    error,

    handleChangeCategory,
    handleChangeUnit,
    handleChangeImage,
    handleDrop,
    handleFileReset,

    handleInvalid: OnInvalidUtil,
    handleChange,
    handleSubmit: (e) =>
      handleSubmit(
        e,
        product_name,
        category,
        quantity,
        unit,
        price,
        purchase_price,
        image,
      ),
    handleSubmitUpdate: (e) =>
      handleSubmitUpdate(
        e,
        product_name,
        category,
        quantity,
        unit,
        price,
        purchase_price,
        image,
      ),
  };
};

export default ProductUtil;
