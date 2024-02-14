type TextAreaProps = {
  required?: boolean | undefined;
  name?: string;
  id?: string;
  className?: string;
  placeholder?: string;
};

export default function TextArea({
  required,
  name,
  placeholder,
  id,
  className,
}: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      required={required}
      name={name}
      id={id}
      className={`border shadow-sm rounded-full  outline-0 py-3 px-4 hover:border-violet-800 focus:border-violet-800 mb-6 mt-1 ${
        className || ""
      }`}
    />
  );
}
