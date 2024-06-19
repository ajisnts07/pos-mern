import axios from "axios";
import { notifyError } from "@/components/ui/feedback/Toast";

const LogoutService = async () => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL;

    const response = await axios.post(`${apiUrl}/auths/logout`);

    return response;
  } catch (error) {
    if (error.message) {
      notifyError("Internal server error");
    } else {
      notifyError("Error setting up the request");
    }
  }
};

export default LogoutService;
