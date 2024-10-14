import React, { useState } from 'react';

interface ButtonPros {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  animate?: boolean;
}
export default function Button({ href, onClick, children, icon, animate }: ButtonPros) {
  if (href) {
    return (
      <a
        className="group gap-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-600"
        href={href}
      >
        {children}
        <span className={`icon mr-2 transition-transform ${!!animate && 'group-hover:animate-btnArrow'}`}>{icon}</span>
      </a>
    );
  }

  return (
    <button
      className="group gap-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
      <span className={`icon mr-2 transition-transform ${!!animate && 'group-hover:animate-btnArrow'}`}>{icon}</span>
    </button>
  );
}
