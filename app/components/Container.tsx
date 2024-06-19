import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`2xl:max-w-[1440px] w-full mx-auto  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
