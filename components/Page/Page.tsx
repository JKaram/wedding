import React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  return <div className="max-w-screen-md m-auto space-y-10">{children}</div>;
}
