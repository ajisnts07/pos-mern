const Drawer = ({ drawerRef, className, children }) => {
  return (
    <>
      <aside
        className={`top-0 z-20 min-h-screen w-[280px] bg-gray-50 px-4 pb-4 ring-1 ring-gray-200 dark:bg-zinc-900 dark:ring-zinc-700 md:sticky md:h-screen md:ring-0 ${className}`}
        ref={drawerRef}
      >
        {children}
      </aside>
    </>
  );
};

export default Drawer;
