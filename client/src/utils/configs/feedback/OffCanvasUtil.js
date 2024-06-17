import { useState } from "react";

const OffCanvasUtil = () => {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  const handleOpenOffCanvas = () => {
    setOffCanvasOpen(true);
  };

  const handleCloseOffCanvas = () => {
    setOffCanvasOpen(false);
  };

  return { offCanvasOpen, handleOpenOffCanvas, handleCloseOffCanvas };
};

export default OffCanvasUtil;
