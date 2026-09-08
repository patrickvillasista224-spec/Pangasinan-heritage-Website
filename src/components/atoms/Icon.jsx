export default function Icon({ children, label }) {
  return (
    <span
      className="icon"
      role="img"
      aria-label={label}
    >
      {children}
    </span>
  );
}