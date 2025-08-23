export default function Button({
  as: Tag = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const base = "btn";
  const variants = {
    primary: "btn-primary",
    outline: "btn-outline",
    subtle:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300 border border-gray-200",
    ghost: "hover:bg-gray-100",
  };
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
