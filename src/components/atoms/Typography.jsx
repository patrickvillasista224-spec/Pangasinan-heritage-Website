export function Heading({ children, level = 1 }) {
  const Tag = `h${level}`;

  return (
    <Tag className="heading">
      {children}
    </Tag>
  );
}

export function Text({ children }) {
  return (
    <p className="text">
      {children}
    </p>
  );
}