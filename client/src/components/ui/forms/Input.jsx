const Input = ({
  type = "text",
  name,
  pattern,
  minLength,
  maxLength,
  value,
  onInvalid,
  onChange,
  onKeyDown,
  className,
  placeholder,
  autoFocus,
  readOnly,
  disabled,
  required,
}) => {
  return (
    <>
      <input
        type={type}
        name={name.toString()}
        id={name.toString()}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onInvalid={onInvalid}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={`input ${className} ${(type !== "email") | (type !== "password") && "capitalize"}`}
        placeholder={placeholder}
        autoFocus={autoFocus}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        autoComplete="off"
      />
    </>
  );
};

export default Input;
