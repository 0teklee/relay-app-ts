import { ReactNode } from "react";

const RepoTable = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-8 rounded-2xl border border-blue-400 bg-white w-full h-full max-w-3xl bg-blue-300">
      {children}
    </div>
  );
};

export default RepoTable;
