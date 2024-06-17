const Progress = ({ percentage, variant, type }) => {
  return (
    <>
      {type === "circle" ? (
        <div className="flex w-full items-center justify-center">
          <div className="relative size-24">
            <div
              className={`absolute rounded-full bg-gray-200 dark:bg-zinc-900 ${percentage !== 1 && "inset-0"}`}
            ></div>

            <div
              className={`absolute inset-0 rounded-full ${variant === "secondary" ? "bg-orange-300" : "bg-indigo-950"}`}
              style={{
                clipPath: `circle(${percentage * 50}% at 50% 50%)`,
              }}
            ></div>

            <div className="small absolute inset-0 flex items-center justify-center text-white dark:text-gray-200">
              {Math.round(percentage * 100)}%
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="relative w-full rounded-full bg-gray-200 dark:bg-zinc-900">
            <div
              className={`start-0 top-0 h-2 rounded-full transition-all duration-300 ease-in-out ${variant === "secondary" ? "bg-orange-300" : "bg-indigo-950"}`}
              style={{
                width: `${percentage * 100}%`,
              }}
            ></div>
          </div>

          <div className="small">{Math.round(percentage * 100)}%</div>
        </div>
      )}
    </>
  );
};

export default Progress;
