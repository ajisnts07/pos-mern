const Radio = ({ name, value, checked, disabled, onChange, children }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="peer"
        />

        <p className="peer-disabled:text-gray-200 peer-disabled:dark:text-zinc-700">
          {children}
        </p>
      </div>
    </>
  );
};

export default Radio;
