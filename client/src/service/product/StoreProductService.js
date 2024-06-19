import axios from "axios";
import { notifyError } from "@/components/ui/feedback/Toast";

const StoreProductService = async (
  product_name,
  category,
  quantity,
  unit,
  price,
  purchase_price,
  image,
  token,
) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL;

    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("unit", unit);
    formData.append("price", price);
    formData.append("purchase_price", purchase_price);

    if (image) {
      formData.append("image", image);
    }

    const response = await axios.post(`${apiUrl}/products`, formData, {
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

export default StoreProductService;
