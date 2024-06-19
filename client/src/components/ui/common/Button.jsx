import { Link } from "react-router-dom";
import Icon from "./Icon";

const Button = ({
  to,
  type,
  variant,
  size,
  block,
  icon,
  className,
  onClick,
  disabled,
  children,
}) => {
  return (
    <>
      <button
        type={type}
        className={` ${
          variant === "secondary"
            ? "secondary"
            : variant === "tertiary"
              ? "tertiary"
              : variant === "quaternary"
                ? "quaternary"
                : "primary"
        } ${
          size === "sm"
            ? "px-2 py-1"
            : size === "md"
              ? "px-4 py-2"
              : "px-6 py-4"
        } ${block && "block w-full"} ${icon && "flex items-center justify-center gap-2"} ${className} rounded-xl text-sm font-semibold disabled:cursor-not-allowed`}
        onClick={onClick}
        disabled={disabled}
      >
        <Link
          to={disabled ? "#" : to}
          aria-disabled={disabled}
          className="flex items-center justify-center gap-1 disabled:cursor-not-allowed"
        >
          {icon && (
            <Icon
              name={icon}
              className={
                variant === "secondary"
                  ? "text-gray-900"
                  : (variant === "tertiary") | (variant === "quaternary")
                    ? "text-gray-600 dark:text-gray-400"
                    : "text-white"
              }
            />
          )}
          {children}
        </Link>
      </button>
    </>
  );
};

export default Button;
