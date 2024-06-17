const Label = ({ htmlFor, children }) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-gray-900 dark:text-gray-200"
      >
        {children}
      </label>
    </>
  );
};

export default Label;
