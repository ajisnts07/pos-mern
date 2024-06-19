import { useState } from "react";
import CapitalizeUtil from "@/utils/helpers/CapitalizeUtil";
import { FormatToNumberUtil } from "@/utils/helpers/FormatToNumberUtil";
import { FormatToRupiahUtil } from "@/utils/helpers/FormatToRupiahUtil";

const OnChangeUtil = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [new_password, setNew_password] = useState("");
  const [confirmation_password, setConfirmation_password] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [product_name, setProduct_name] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchase_price, setPurchase_price] = useState("");
  const [displayPurchasePrice, setDisplayPurchasePrice] = useState("");
  const [price, setPrice] = useState("");
  const [displayPrice, setDisplayPrice] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let numericValue;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "new_password") {
      setNew_password(value);
    } else if (name === "confirmation_password") {
      setConfirmation_password(value);
    } else if (name === "name") {
      setName(CapitalizeUtil(value));
    } else if (name === "address") {
      setAddress(CapitalizeUtil(value));
    } else if (name === "phone_number") {
      setPhone_number(value);
    } else if (name === "product_name") {
      setProduct_name(CapitalizeUtil(value));
    } else if (name === "quantity") {
      setQuantity(value);
    }

    if (typeof value === "string") {
      numericValue = value.replace(/\D/g, "");
    } else {
      numericValue = String(value);
    }

    const isNumeric =
      !isNaN(parseFloat(numericValue)) && isFinite(parseFloat(numericValue));

    if (name === "purchase_price") {
      if (isNumeric) {
        const formattedPrice = FormatToNumberUtil(numericValue);
        setPurchase_price(formattedPrice);
        setDisplayPurchasePrice(FormatToRupiahUtil(numericValue));
      } else {
        setPurchase_price("");
        setDisplayPurchasePrice("");
      }
    } else if (name === "price") {
      if (isNumeric) {
        const formattedPrice = FormatToNumberUtil(numericValue);
        setPrice(formattedPrice);
        setDisplayPrice(FormatToRupiahUtil(numericValue));
      } else {
        setPrice("");
        setDisplayPrice("");
      }
    }
  };

  return {
    email,
    password,
    new_password,
    confirmation_password,
    name,
    address,
    phone_number,
    product_name,
    quantity,
    purchase_price,
    price,
    displayPrice,
    displayPurchasePrice,
    handleChange,
  };
};

export default OnChangeUtil;
