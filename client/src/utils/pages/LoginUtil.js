import { OnInvalidUtil } from "../props/invalid/OnInvalidUtil";
import OnChangeUtil from "../props/change/OnChangeUtil";
import SubmitLoginUtil from "../props/submit/SubmitLoginUtil";

const LoginUtil = () => {
  const { email, password, handleChange } = OnChangeUtil();
  const { handleSubmit, loginAttempts, locked, lockTime } = SubmitLoginUtil();

  return {
    handleInvalid: OnInvalidUtil,
    handleChange,
    handleSubmit: (e) => handleSubmit(e, email, password),
    loginAttempts,
    locked,
    lockTime,
  };
};

export default LoginUtil;
