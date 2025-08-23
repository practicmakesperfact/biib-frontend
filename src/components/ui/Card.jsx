
export default function Card({ className = "", children, ...props }) {
  return (
    <div className={`card card-hover ${className}`} {...props}>
      {children}
    </div>
  );
}
