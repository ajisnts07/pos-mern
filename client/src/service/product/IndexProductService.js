import axios from "axios";
import Cookies from "js-cookie";
import { notifyError } from "@/components/ui/feedback/Toast";

const IndexProductService = async (size, current) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL;
    const token = Cookies.get("token");

    if (!token) {
      notifyError("Unauthorized, silahkan login terlebih dahulu");
      return;
    }

    const response = await axios.get(
      `${apiUrl}/products?size=${size}&current=${current}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
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

export default IndexProductService;
