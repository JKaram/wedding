import React from "react";

export default function Title({ children, classname = "" }: { children: React.ReactNode; classname?: string }) {
  return <h1 className={`font-serif ${classname}`}>{children}</h1>;
}
