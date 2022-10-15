import { ReactNode } from "react";

const RepoTable = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h3 className="mb-6 text-2xl font-bold">Results</h3>
      <div className="p-8 w-full h-full bg-blue-300">{children}</div>
    </>
  );
};

export default RepoTable;
