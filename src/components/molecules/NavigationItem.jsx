export default function NavigationItem({
  href,
  children,
}) {
  return (
    <a
      href={href}
      className="navigation-item"
    >
      {children}
    </a>
  );
}