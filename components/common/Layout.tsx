import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full min-h-full pt-4 pb-12 flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
