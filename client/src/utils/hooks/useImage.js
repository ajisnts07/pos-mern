const { useState } = require("react");

const useImage = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleChangeImage = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.size <= 512000) {
      setError(null);
      setImage(selectedFile);
    } else {
      setError(
        "Ukuran file harus kurang dari 500 kb. Kompres gambar terlebih dahulu",
      );
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile && droppedFile.size <= 512000) {
      setError(null);
      setImage(droppedFile);
      return;
    } else {
      setError(
        "Ukuran file harus kurang dari 500 kb. Kompres gambar terlebih dahulu",
      );
    }
  };

  const handleFileReset = () => {
    setImage(null);
  };

  return { image, error, handleChangeImage, handleDrop, handleFileReset };
};

export default useImage;
