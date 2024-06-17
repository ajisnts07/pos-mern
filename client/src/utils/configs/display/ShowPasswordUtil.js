import { useState } from "react";

const ShowPasswordUtil = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmationPassword = () => {
    setShowConfirmationPassword(!showConfirmationPassword);
  };

  return {
    showPassword,
    showConfirmationPassword,
    handleShowPassword,
    handleShowConfirmationPassword,
  };
};

export default ShowPasswordUtil;
