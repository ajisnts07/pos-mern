import DefaultImage from "@/assets/img/default-image.png";
import Icon from "../common/Icon";
import { FiAlertTriangle, FiXCircle, FiCheckCircle } from "react-icons/fi";

const Card = ({
  media,
  mediaType,
  header,
  status,
  footer,
  childrenHeader,
  onClick,
  children,
  childrenFooter,
}) => {
  return (
    <>
      <div
        className={`${media ? "pb-4" : "py-4"} ${onClick && "cursor-pointer hover:bg-gray-100"} rounded-xl bg-gray-50 dark:bg-zinc-900`}
        onClick={onClick}
      >
        {media && (
          <img
            src={media.length > 0 ? media : DefaultImage}
            className={
              mediaType === "circle"
                ? "mx-auto w-1/2 rounded-full p-4"
                : "mb-4 max-h-32 w-full rounded-t-xl border border-gray-900"
            }
            alt="card_image"
          />
        )}

        {header && (
          <div className="flex items-center justify-between px-4">
            <h5>{childrenHeader}</h5>

            {status && (
              <p className="flex items-center gap-1">
                Status:
                <span>
                  {status === "warning" ? (
                    <Icon name={FiAlertTriangle} className="text-yellow-500" />
                  ) : status === "danger" ? (
                    <Icon name={FiXCircle} className="text-red-500" />
                  ) : (
                    <Icon name={FiCheckCircle} className="text-green-500" />
                  )}
                </span>
              </p>
            )}
          </div>
        )}

        <div className={`${header && "pt-2"} px-4`}>{children}</div>

        {footer && (
          <div className="flex justify-end gap-2 px-4 pt-4">
            {childrenFooter}
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
