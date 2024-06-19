import axios from "axios";
import { notifyError } from "@/components/ui/feedback/Toast";

const ResetPasswordService = async (new_password, rpid00, token) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL;

    const response = await axios.post(
      `${apiUrl}/auths/reset-password?rpid00=${rpid00}&token=${token}`,
      { new_password },
    );

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

export default ResetPasswordService;
