const OffCanvas = ({
  offCanvasOpen,
  handleCloseOffCanvas,
  placement,
  header,
  closable,
  childrenTitle,
  children,
}) => {
  if (!offCanvasOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseOffCanvas();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-zinc-950 bg-opacity-75"
        onClick={handleClickOutside}
      >
        <div
          className={`absolute top-0 z-20 h-screen w-3/4 transform bg-white shadow-sm transition-all dark:bg-zinc-900 md:w-1/4 ${placement === "left" ? "start-0" : "end-0"}`}
        >
          {header && (
            <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700">
              <h4>{childrenTitle}</h4>

              {closable && (
                <button
                  className="-mt-1 text-2xl text-gray-900 hover:opacity-75 dark:text-gray-200"
                  onClick={handleCloseOffCanvas}
                >
                  &times;
                </button>
              )}
            </div>
          )}

          <div className="h-full overflow-auto p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
