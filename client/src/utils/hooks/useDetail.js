import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { notifyError } from "@/components/ui/feedback/Toast";
import ImageService from "service/upload/ImageService";

const useDetail = (fetchData, path) => {
  const [data, setData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const id = useParams();
  const id_data = id.id;

  useEffect(() => {
    if (id_data) {
      const fetchDataWrapper = async () => {
        try {
          const response = await fetchData(id_data);

          setData(response.data.data);

          if (response.data.data.image) {
            const imageName = response.data.data.image;

            const responseImage = await ImageService(path, imageName);

            const imageUrl = URL.createObjectURL(responseImage.data);
            setImageUrl(imageUrl);
          }
        } catch (error) {
          notifyError("Terjadi kesalahan saat mengambil data:", error);
        }
      };

      fetchDataWrapper();
    }
  }, [fetchData, id_data, path]);

  return { id_data, data, imageUrl };
};

export default useDetail;
