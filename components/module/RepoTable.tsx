import { ReactNode } from "react";

const RepoTable = ({ children }: { children: ReactNode }) => {
  return <div className="p-8 w-full h-full bg-blue-300">{children}</div>;
};

export default RepoTable;
