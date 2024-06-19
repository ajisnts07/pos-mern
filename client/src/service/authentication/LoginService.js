import axios from "axios";
import { notifyError } from "@/components/ui/feedback/Toast";

const LoginService = async (email, password) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL;

    const response = await axios.post(
      `${apiUrl}/auths/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 404) {
        notifyError("Data tidak ditemukan");
      } else {
        notifyError(data.message || "An error occurred");
      }
    } else if (error.message) {
      notifyError("Internal server error");
    } else {
      notifyError("Error setting up the request");
    }
  }
};

export default LoginService;
