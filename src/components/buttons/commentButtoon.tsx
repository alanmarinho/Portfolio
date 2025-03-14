import React from 'react';

interface ButtonPros {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}
export default function ButtonComment({ onClick, children, icon, href }: ButtonPros) {
  if (!!href) {
    return (
      <a
        href={href}
        className="flex bg-secondary p-3 rounded-md text-white hover:cursor-pointer transform hover:scale-[102%]"
      >
        {children}
        {!!icon && icon}
      </a>
    );
  }
  return (
    <div
      onClick={onClick}
      className="flex bg-secondary p-3 rounded-md text-white hover:cursor-pointer transform hover:scale-[102%]"
    >
      <p>{children}</p>
      {!!icon && icon}
    </div>
  );
}
