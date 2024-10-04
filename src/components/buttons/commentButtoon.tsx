import React from 'react';

interface ButtonPros {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}
export default function ButtonComment({ onClick, children, icon }: ButtonPros) {
  return (
    <div
      onClick={onClick}
      className="flex bg-secondary p-3 rounded-md text-white hover:cursor-pointer transform hover:scale-[102%]"
    >
      <p>{children}</p>
    </div>
  );
}
