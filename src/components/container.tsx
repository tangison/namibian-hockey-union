export function Container({
  children,
  className = "",
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Component className={`mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </Component>
  );
}
