import React from "react";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
};

export default function Button({ onClick, children, type = "button" }: Props) {
  return (
    <button type={type} className="px-10 py-2 bg-black text-white" onClick={onClick}>
      {children}
    </button>
  );
}
