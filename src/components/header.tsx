import Logo from '@components/logo';
import Nav from '@components/nav';
import { ReactElement, ReactNode } from 'react';

interface HeaderProps {
  navItems?: ReactElement;
}

export default function Header({ navItems }: HeaderProps) {
  return (
    <header className="flex sticky flex-wrap shadow-lg w-full p-6 bg-white mx-auto z-20 top-0 items-center justify-between">
      <Logo />
      {navItems ? navItems : null}
    </header>
  );
}
