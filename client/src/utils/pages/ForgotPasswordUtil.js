import { OnInvalidUtil } from "../props/invalid/OnInvalidUtil";
import OnChangeUtil from "../props/change/OnChangeUtil";
import SubmitForgotPasswordUtil from "../props/submit/SubmitForgotPasswordUtil";

const ForgotPasswordUtil = () => {
  const { email, handleChange } = OnChangeUtil();
  const { handleSubmit } = SubmitForgotPasswordUtil();

  return {
    handleInvalid: OnInvalidUtil,
    handleChange,
    handleSubmit: (e) => handleSubmit(e, email),
  };
};

export default ForgotPasswordUtil;
