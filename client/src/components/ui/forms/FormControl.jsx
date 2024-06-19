import Label from "./Label";

const FormControl = ({ htmlFor, childrenLabel, className, children }) => {
  return (
    <>
      <div className={`mt-3 ${className}`}>
        <Label htmlFor={htmlFor} children={childrenLabel} />

        {children}
      </div>
    </>
  );
};

export default FormControl;
