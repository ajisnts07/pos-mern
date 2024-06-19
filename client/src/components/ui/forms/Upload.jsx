import { Link } from "react-router-dom";
import Button from "../common/Button";
import { IoImageOutline } from "react-icons/io5";

const Upload = ({
  draggable,
  disabled,
  image,
  imageUrl,
  error,
  handleChangeImage,
  handleDrop,
  handleFileReset,
}) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
      {imageUrl && !image && (
        <img
          src={imageUrl}
          className="mx-auto max-h-40 w-full rounded-lg object-cover"
          alt="preview"
        />
      )}

      {draggable ? (
        <>
          <div
            className={`mt-3 border-spacing-20 rounded-xl border-2 border-dashed border-gray-200 p-4 text-center dark:border-zinc-700 md:p-3 ${disabled ? "cursor-not-allowed bg-gray-50 dark:bg-transparent" : "cursor-pointer"}`}
            onClick={handleClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {image ? (
              <>
                <img
                  src={URL.createObjectURL(image)}
                  className="mx-auto max-h-40 w-full rounded-lg object-cover"
                  alt="preview"
                />

                <div className="mt-2 text-start">
                  <p className="w-full break-words font-semibold">
                    {image.name}
                  </p>
                  <p className="extra-small mt-1">
                    Size: {(image.size / 1024).toFixed(2)} KB
                  </p>
                </div>

                <input
                  type="file"
                  id="fileInput"
                  onChange={handleChangeImage}
                  className="hidden"
                  disabled={disabled}
                />
              </>
            ) : (
              <>
                <IoImageOutline
                  size={60}
                  className={`mx-auto mb-4 text-gray-600 dark:text-gray-400 ${disabled && "text-gray-200 dark:text-zinc-700"}`}
                />
                <p
                  className={`font-semibold ${disabled && "text-gray-200 dark:text-zinc-700"}`}
                >
                  Drop your image here, or{" "}
                  <span
                    className={`${disabled ? "text-gray-200 dark:text-zinc-700" : "text-indigo-950 dark:text-orange-300"}`}
                  >
                    Browse
                  </span>
                </p>
                <div
                  className={`small ${disabled && "text-gray-200 dark:text-zinc-700"}`}
                >
                  Support: jpg, jpeg, png
                </div>

                <input
                  type="file"
                  id="fileInput"
                  onChange={handleChangeImage}
                  className="hidden"
                  disabled={disabled}
                />
              </>
            )}
          </div>

          {image && (
            <Button
              variant="tertiary"
              onClick={handleFileReset}
              className="float-end mt-3 w-20"
              size="md"
              children="Reset"
            />
          )}
        </>
      ) : (
        <>
          {image && (
            <>
              <p className="mt-3">Selected Image: {image.name}</p>
            </>
          )}

          <div
            className={`mb-2 mt-3 w-fit rounded-xl p-4 ring-1 ring-gray-200 dark:ring-zinc-900 md:p-3 ${disabled ? "cursor-not-allowed bg-gray-50 dark:bg-transparent" : "cursor-pointer"}`}
            onClick={handleClick}
          >
            <p
              className={`font-semibold ${disabled && "text-gray-200 dark:text-zinc-700"}`}
            >
              Upload
            </p>
            <input
              type="file"
              id="fileInput"
              onChange={handleChangeImage}
              className="hidden"
              accept="image/*"
              disabled={disabled}
            />
          </div>
        </>
      )}

      {error && (
        <p className="mt-2 text-center text-red-500 dark:text-red-900">
          {error}{" "}
          <Link
            target="_blank"
            to="https://imageresizer.com/image-compressor"
            className="font-bold underline hover:opacity-75"
          >
            Klik disini
          </Link>
        </p>
      )}
    </>
  );
};

export default Upload;
