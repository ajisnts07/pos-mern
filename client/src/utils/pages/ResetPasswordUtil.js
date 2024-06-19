import { OnInvalidUtil } from "../props/invalid/OnInvalidUtil";
import OnChangeUtil from "../props/change/OnChangeUtil";
import SubmitResetPasswordUtil from "../props/submit/SubmitResetPasswordUtil";

const ResetPasswordUtil = () => {
  const { new_password, confirmation_password, handleChange } = OnChangeUtil();
  const { handleSubmit } = SubmitResetPasswordUtil();

  return {
    handleInvalid: OnInvalidUtil,
    handleChange,
    handleSubmit: (e) => handleSubmit(e, new_password, confirmation_password),
  };
};

export default ResetPasswordUtil;
