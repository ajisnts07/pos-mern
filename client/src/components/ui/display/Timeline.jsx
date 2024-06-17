const Timeline = ({ children }) => {
  return (
    <>
      <div className="grid-col-1 grid gap-6 border-s-2 border-gray-200 dark:border-zinc-700">
        {children}
      </div>
    </>
  );
};

export const TimelineItem = ({ children }) => {
  return (
    <>
      <div className="flex items-start gap-2">
        <div className="-ms-[9px] size-4 rounded-full border-2 border-white bg-gray-200 dark:border-zinc-700 dark:bg-zinc-900"></div>
        {children}
      </div>
    </>
  );
};

export default Timeline;
