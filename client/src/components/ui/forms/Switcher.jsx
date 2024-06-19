const Switcher = ({
  state,
  prefix: IconStart,
  suffix: IconEnd,
  onClick,
  disabled,
}) => {
  return (
    <>
      <div
        className={`flex w-10 items-center gap-1 rounded-full p-1 ${state ? "bg-indigo-950" : "bg-gray-200 dark:bg-zinc-900"}`}
      >
        <IconStart
          size={12}
          className={`text-white dark:text-gray-400 ${!state && "hidden"}`}
        />

        <div
          className={`size-4 cursor-pointer rounded-full bg-white transition-transform duration-300 ease-in-out dark:bg-gray-400 ${state && "ms-auto"} ${disabled && "cursor-not-allowed"}`}
          onClick={disabled ? null : onClick}
        ></div>

        <IconEnd
          size={12}
          className={`text-white dark:text-gray-400 ${state && "hidden"}`}
        />
      </div>
    </>
  );
};

export default Switcher;
