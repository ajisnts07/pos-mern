import { FiCheck } from "react-icons/fi";

const Step = ({ children }) => {
  return (
    <>
      <div className="step flex items-center justify-center">{children}</div>
    </>
  );
};

export const StepItem = ({ checked, active, number, children }) => {
  return (
    <>
      <div className="step-item w-full">
        <div
          className={`line -mb-[18px] border-t-2 ${checked ? "border-indigo-950 dark:border-orange-300" : "border-gray-200 dark:border-zinc-700"}`}
        ></div>

        <div className="flex items-center justify-start gap-[2.5px]">
          <div
            className={`circle flex size-9 items-center justify-center rounded-full ${checked ? "bg-indigo-950 ring-2 ring-indigo-950 dark:bg-orange-300 dark:ring-orange-300" : active ? "bg-white ring-2 ring-indigo-950 dark:bg-zinc-900 dark:ring-orange-300" : "bg-white ring-2 ring-gray-200 dark:bg-zinc-900 dark:ring-zinc-700"}`}
          >
            {checked ? (
              <FiCheck size={20} className="text-white" />
            ) : (
              <p
                className={`font-semibold ${active ? "text-indigo-950" : "text-gray-600 dark:text-gray-400"}`}
              >
                {number}
              </p>
            )}
          </div>

          <p
            className={`text hidden bg-white px-2 font-semibold dark:bg-zinc-900 md:inline ${checked && "text-indigo-950"}`}
          >
            {children}
          </p>
        </div>
      </div>
    </>
  );
};

export default Step;
