import { ReactNode } from "react";

const RepoTable = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full max-w-3xl p-8 rounded-2xl border border-gray-300 bg-white">
      {children}
    </div>
  );
};

export default RepoTable;
