import { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`container mx-auto sm:max-w-[640px] md:max-w-[768px] mlg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] ${className}`}
    >
      {children}
    </div>
  );
}
