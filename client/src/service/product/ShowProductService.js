import axios from "axios";
import Cookies from "js-cookie";
import { notifyError } from "@/components/ui/feedback/Toast";

const ShowProductService = async (id) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL;
    const token = Cookies.get("token");

    if (!token) {
      notifyError("Unauthorized, silahkan login terlebih dahulu");
      return;
    }

    const response = await axios.get(`${apiUrl}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
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

export default ShowProductService;
