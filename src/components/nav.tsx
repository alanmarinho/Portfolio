import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>();
  const Anchors = () => {
    return (
      <>
        <a className="hover:text-primary" onClick={() => isOpen && setIsOpen(!isOpen)} href="#about">
          About
        </a>
        <a className="hover:text-primary" onClick={() => isOpen && setIsOpen(!isOpen)} href="#skills">
          Skills
        </a>
        <a className="hover:text-primary" onClick={() => isOpen && setIsOpen(!isOpen)} href="#projects">
          Projects
        </a>
        <a className="hover:text-primary" onClick={() => isOpen && setIsOpen(!isOpen)} href="#academics">
          Academics
        </a>
      </>
    );
  };
  const hlandleOpen = () => {
    isOpen && setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex w-1/2 flex-row justify-end">
        <div className="hidden md:flex justify-end gap-16">
          <Anchors />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? <Menu color="#000" /> : <X color="#000" />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full items-center flex-col">
          <Anchors />
        </div>
      )}
    </>
  );
}
