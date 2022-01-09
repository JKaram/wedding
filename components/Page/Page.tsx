import React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  return <div className="border-red-800 border-4">{children}</div>;
}
