
export default function Container({ className = "", children }) {
  return (
    <div className={`container mx-auto px-6 ${className}`}>{children}</div>
  );
}
