import { OnInvalidUtil } from "../props/invalid/OnInvalidUtil";
import useSelect from "../hooks/useSelect";
import useImage from "../hooks/useImage";
import OnChangeUtil from "../props/change/OnChangeUtil";
import SubmitRegisterUtil from "../props/submit/SubmitRegisterUtil";

const RegisterUtil = () => {
  const {
    role,
    gender,
    position,
    handleChangeRole,
    handleChangeGender,
    handleChangePosition,
  } = useSelect();

  const { image, error, handleChangeImage, handleDrop, handleFileReset } =
    useImage();

  const {
    email,
    password,
    confirmation_password,
    name,
    address,
    phone_number,
    handleChange,
  } = OnChangeUtil();
  const { handleSubmit } = SubmitRegisterUtil();

  const accountFilled = email && password && confirmation_password && role;
  const dataFilled = name && gender && address && phone_number;
  const jobFilled = position;

  return {
    accountFilled,
    dataFilled,
    jobFilled,
    image,
    error,

    handleChangeRole,
    handleChangeGender,
    handleChangePosition,
    handleChangeImage,
    handleDrop,
    handleFileReset,
    handleInvalid: OnInvalidUtil,
    handleChange,

    handleSubmit: (e) =>
      handleSubmit(
        e,
        email,
        password,
        confirmation_password,
        role,
        name,
        gender,
        address,
        phone_number,
        image,
        position,
      ),
  };
};

export default RegisterUtil;
