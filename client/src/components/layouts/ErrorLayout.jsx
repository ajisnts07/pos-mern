const ErrorLayout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-zinc-950">
        {children}
      </div>
    </>
  );
};

export default ErrorLayout;
