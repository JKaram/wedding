import React from "react";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: Props) {
  return (
    <button className="px-10 py-2 bg-black text-white" onClick={onClick}>
      {children}
    </button>
  );
}
