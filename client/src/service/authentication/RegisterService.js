import axios from "axios";
import { notifyError } from "@/components/ui/feedback/Toast";

const RegisterService = async (
  email,
  password,
  role,
  name,
  gender,
  address,
  phone_number,
  image,
  position,
  token,
) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL;

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("name", name);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("phone_number", phone_number);
    formData.append("position", position);
    if (image) {
      formData.append("image", image);
    }

    const response = await axios.post(`${apiUrl}/auths/register`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;

      notifyError(data.message || "An error occurred");
    } else if (error.message) {
      notifyError("Internal server error");
    } else {
      notifyError("Error setting up the request");
    }
  }
};

export default RegisterService;
